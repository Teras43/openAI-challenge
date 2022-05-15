import { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { AiResponses, PromptAi } from "../components";
import floppydisk from "../assets/images/floppy-disk.png";

export type PromptHistoryTypes = {
  prompt: string;
  promptResponse: string;
};

const PromptView = () => {
  const [promptResponse, setPromptResponse] = useState<PromptHistoryTypes>({
    prompt: "",
    promptResponse: "",
  });
  const [promptHistory, setPromptHistory] = useState<PromptHistoryTypes[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const saveHistory = () => {
    localStorage.setItem("promptHistory", JSON.stringify(promptHistory));
  };

  const getHistory = () => {
    const stringifiedHistory = localStorage.getItem("promptHistory");
    const prevPromptHistory = JSON.parse(stringifiedHistory as string);
    setPromptHistory(prevPromptHistory);
  };

  useEffect(() => {
    getHistory();
    setPromptHistory((prev) => {
      return prev
        ? [...prev, { ...promptResponse } as PromptHistoryTypes]
        : [{ ...promptResponse } as PromptHistoryTypes];
    });
  }, [promptResponse]);

  const sendPrompt = useCallback((prompt: string) => {
    const data = {
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };
    fetch(process.env.REACT_APP_URL as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify(data),
    }).then((data) =>
      data.json().then((responseData) => {
        setPromptResponse({
          prompt: prompt,
          promptResponse: responseData.choices[0].text,
        });
        setIsLoading(false);
      })
    );
  }, []);

  return (
    <PageWrapper>
      <HeaderSection>
        <PageHeader>Fun with AI</PageHeader>
        <SaveBtn onClick={() => saveHistory()}>
          <img src={floppydisk} alt={"Floppy Disk Icon"} />
        </SaveBtn>
      </HeaderSection>
      <AiResponses promptHistory={promptHistory} />
      <PromptAi
        sendPrompt={sendPrompt}
        loadingActions={{ isLoading, setIsLoading }}
      />
    </PageWrapper>
  );
};

/** Styles */
const PageWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2px;
  max-width: 375px;
  max-height: 667px;
  background-color: #201e1f;
  border: 1px solid #f4f4f6;
  box-sizing: border-box;
`;

const HeaderSection = styled.div`
  height: 8%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PageHeader = styled.h1`
  color: #e6e6e9;
  font-size: 24px;
  font-family: "Press Start 2P", cursive;
`;

const SaveBtn = styled.button`
  height: 40px;
  width: 40px;
  margin-right: 10px;
  border-radius: 50%;
  border: none;
  background-color: #e6e6e9;
  padding-top: 5px;
  padding-left: 7px;

  img {
    height: 80%;
    width: 90%;
  }
`;

/** Exports */
export default PromptView;

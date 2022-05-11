import { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { DarkModeToggle, AiResponses, PromptAi } from "../components";

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

  useEffect(() => {
    setPromptHistory((prev) => {
      return [...prev, { ...promptResponse } as PromptHistoryTypes];
    });
  }, [promptResponse]);

  const sendPrompt = useCallback((prompt: string) => {
    console.log("Prompt Sending...");
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
      data.json().then((responseData) =>
        setPromptResponse({
          prompt: prompt,
          promptResponse: responseData.choices[0].text,
        })
      )
    );
  }, []);

  return (
    <PageWrapper>
      <DarkModeToggle />
      <PageHeader>Fun with AI</PageHeader>
      <AiResponses promptHistory={promptHistory} />
      <PromptAi sendPrompt={sendPrompt} />
    </PageWrapper>
  );
};

/** Styles */
const PageWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2px;
`;

const PageHeader = styled.h1`
  font-size: 24px;
`;

/** Exports */
export default PromptView;

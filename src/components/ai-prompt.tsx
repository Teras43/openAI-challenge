import { useState } from "react";
import styled from "styled-components";
import _ from "lodash";
import sendarrow from "../assets/images/send-arrow.png";
import loadingarrow from "../assets/images/refresh-arrow.png";

type PromptTypes = {
  sendPrompt: (prompt: string) => void;
  loadingActions: {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

const PromptAi = ({ sendPrompt, loadingActions }: PromptTypes) => {
  const [promptInputValue, setPromptInputValue] = useState<string>("");
  const [promptHeaderText, setPromptHeaderText] =
    useState<string>("Enter Prompt:");

  const suggestPrompt = () => {
    const suggestionArray: string[] = [
      "Hello, how are you today?",
      "What is your favorite color?",
      "Could you read me a poem?",
      "What do you do when you feel sad?",
      "What do you do when you feel happy?",
      "Do you dream?",
      "Do Androids dream of Electric Sheep?",
    ];
    const randomPrompt = _.sample(suggestionArray);
    setPromptInputValue(randomPrompt as string);
  };

  return (
    <PromptWrap>
      <PromptHeader
        color={promptHeaderText === "Enter Prompt:" ? "white" : "red"}
      >
        {promptHeaderText}
      </PromptHeader>
      <PromptTextArea
        value={promptInputValue}
        onChange={(e) => setPromptInputValue(e.target.value)}
      />
      <BtnSection>
        <SuggestBtn
          onClick={() => {
            suggestPrompt();
          }}
        >
          Suggest
        </SuggestBtn>
        <SubmitBtn
          isLoading={loadingActions.isLoading}
          onClick={() => {
            if (promptInputValue !== "") {
              sendPrompt(promptInputValue);
              setPromptInputValue("");
              loadingActions.setIsLoading(true);
            } else {
              setPromptHeaderText("Please enter a prompt!");
              setTimeout(() => {
                setPromptHeaderText("Enter Prompt:");
              }, 3000);
            }
          }}
        >
          <img
            src={loadingActions.isLoading ? loadingarrow : sendarrow}
            alt={"Send Prompt Arrow"}
          />
        </SubmitBtn>
      </BtnSection>
    </PromptWrap>
  );
};

/** Styles */
const PromptWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 3;
  align-items: center;
`;

const PromptHeader = styled.div<{ color: string }>`
  color: ${({ color }) => (color === "red" ? "#f82222" : "#e6e6e9")};
`;

const PromptTextArea = styled.textarea`
  width: 90%;
  height: 50%;
  border-radius: 10px;
  background-color: black;
  border: 1px solid #e6e6e9;
  color: #e6e6e9;
  font-size: 18px;
`;

const BtnSection = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5px;
  position: relative;
`;

const SubmitBtn = styled.button<{ isLoading: boolean }>`
  position: absolute;
  right: 10px;
  bottom: 15px;
  border: none;
  width: 40px;
  height: 40px;
  margin-left: 100px;
  border-radius: 50%;
  padding: 0;
  padding-right: ${({ isLoading }) => (isLoading ? "0px" : "3px")};
  padding-top: ${({ isLoading }) => (isLoading ? "4px" : "2px")};

  img {
    width: ${({ isLoading }) => (isLoading ? "80%" : "100%")};
    height: ${({ isLoading }) => (isLoading ? "80%" : "100%")};
    animation-name: ${({ isLoading }) => (isLoading ? "spin" : "")};
    animation-duration: 2000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes spin {
      from {
        transform: rotate(360deg);
      }

      to {
        transform: rotate(0deg);
      }
    }
  }
`;

const SuggestBtn = styled.button`
  width: 70px;
  height: 25px;
  font-style: italic;
  border: none;
  color: #e6e6e9;
  background-color: #201e1f;
`;

/** Exports */
export default PromptAi;

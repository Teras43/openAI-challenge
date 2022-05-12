import { useState } from "react";
import styled from "styled-components";
import _ from "lodash";

type PromptTypes = {
  sendPrompt: (prompt: string) => void;
};

const PromptAi = ({ sendPrompt }: PromptTypes) => {
  const [promptInputValue, setPromptInputValue] = useState<string>("");

  const suggestPrompt = () => {
    const suggestionArray: string[] = [
      "Hello, how are you today?",
      "What is your favorite color?",
      "Could you read me a poem?",
      "What do you do when you feel sad?",
      "What do you do when you feel happy?",
    ];
    const randomPrompt = _.sample(suggestionArray);
    setPromptInputValue(randomPrompt as string);
  };

  return (
    <PromptWrap>
      <div>Enter Prompt:</div>
      <PromptTextArea
        value={promptInputValue}
        onChange={(e) => setPromptInputValue(e.target.value)}
      />
      <BtnSection>
        <SubmitBtn
          onClick={() => {
            sendPrompt(promptInputValue);
            setPromptInputValue("");
          }}
        >
          Submit
        </SubmitBtn>
        <SuggestBtn
          onClick={() => {
            suggestPrompt();
          }}
        >
          Suggest
        </SuggestBtn>
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

const PromptTextArea = styled.textarea`
  width: 90%;
  height: 50%;
  border-radius: 10px;
`;

const BtnSection = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

const SubmitBtn = styled.button`
  width: 80px;
  height: 30px;
`;

const SuggestBtn = styled.button`
  width: 70px;
  height: 25px;
  margin-left: 100px;
  font-style: italic;
  border: none;
  background-color: white;
`;

/** Exports */
export default PromptAi;

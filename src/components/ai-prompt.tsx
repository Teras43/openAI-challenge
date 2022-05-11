import { useState } from "react";
import styled from "styled-components";

type PromptTypes = {
  sendPrompt: (prompt: string) => void;
};

const PromptAi = ({ sendPrompt }: PromptTypes) => {
  const [promptInputValue, setPromptInputValue] = useState<string>("");

  return (
    <PromptWrap>
      <div>Enter Prompt:</div>
      <PromptTextArea
        value={promptInputValue}
        onChange={(e) => setPromptInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          sendPrompt(promptInputValue);
          setPromptInputValue("");
        }}
      >
        Submit
      </button>
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
`;

/** Exports */
export default PromptAi;

import { useState } from "react";
import styled from "styled-components";

const PromptAi = () => {
  const [prompt, setPrompt] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  return (
    <PromptWrap>
      <div>Enter Prompt:</div>
      <PromptTextArea value={prompt} onChange={handleChange} />
      <button>Submit</button>
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

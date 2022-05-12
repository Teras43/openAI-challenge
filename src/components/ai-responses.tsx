import styled from "styled-components";
import { ResponseCard } from "./";
import { PromptHistoryTypes } from "../views/ai-prompt-view";

type Props = {
  promptHistory: PromptHistoryTypes[];
};

const AiResponses = ({ promptHistory }: Props) => {
  const allResponses = promptHistory
    .filter((value) => value.prompt !== "" && value.promptResponse !== "")
    .map((response, index) => {
      return (
        <ResponseCard
          key={index}
          prompt={response.prompt}
          promptResponse={response.promptResponse}
        />
      );
    });

  return (
    <ResponseWrap>
      <ResponseHeader>Responses</ResponseHeader>
      <ResponseBody>{allResponses}</ResponseBody>
    </ResponseWrap>
  );
};

/** Styles */
const ResponseWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 7;
  margin-bottom: 15px;
`;

const ResponseHeader = styled.h2`
  display: flex;
  justify-content: flex-start;
  font-size: 16px;
`;

const ResponseBody = styled.div`
  height: 100%;
  width: 95%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  overflow: scroll;
  max-height: 382px;
  padding: 5px;
`;

/** Exports */
export default AiResponses;

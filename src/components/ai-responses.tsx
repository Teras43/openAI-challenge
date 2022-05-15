import styled from "styled-components";
import { ResponseCard } from "./";
import { PromptHistoryTypes } from "../views/ai-prompt-view";
import { useEffect, useRef } from "react";

type Props = {
  promptHistory: PromptHistoryTypes[];
};

const AiResponses = ({ promptHistory }: Props) => {
  const bottomMessageRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    bottomMessageRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [allResponses]);

  return (
    <ResponseWrap>
      <ResponseHeader>Responses</ResponseHeader>
      <ResponseBody>
        {allResponses}
        <div ref={bottomMessageRef}></div>
      </ResponseBody>
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
  color: #e6e6e9;
`;

const ResponseBody = styled.div`
  height: 100%;
  width: 95%;
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e6e9;
  border-radius: 10px;
  overflow: scroll;
  max-height: 382px;
  padding: 5px;
  background-color: black;
`;

/** Exports */
export default AiResponses;

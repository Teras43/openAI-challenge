import styled from "styled-components";
import { DarkModeToggle, AiResponses, PromptAi } from "../components";

const PromptView = () => {
  return (
    <PageWrapper>
      <DarkModeToggle />
      <PageHeader>Fun with AI</PageHeader>
      <AiResponses />
      <PromptAi />
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

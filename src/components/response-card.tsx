import styled from "styled-components";

type CardProps = {
  prompt: string;
  promptResponse: string;
};

const ResponseCard = ({ prompt, promptResponse }: CardProps) => {
  return (
    <CardWrapper>
      <div className="prompt-sent-text right">{prompt}</div>
      <div className="prompt-response-text left">{promptResponse}</div>
    </CardWrapper>
  );
};

/** Styles */
const CardWrapper = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 8px 18px;
  color: #e6e6e9;
  z-index: 1;

  .prompt-sent-text {
    position: relative;
    padding: 8px;
    border: 1px solid #e6e6e9;
    border-radius: 12px;
    background-color: #176cdb;
    max-width: 70%;
    font-size: 18px;
    margin-left: auto;
    margin-bottom: 8px;
  }
  .right::before {
    content: " ";
    position: absolute;
    width: 0;
    height: 0;
    left: auto;
    right: -23px;
    top: -1px;
    bottom: auto;
    border: 22px solid;
    border-color: #e6e6e9 transparent transparent transparent;
    z-index: -1;
  }

  .right::after {
    content: " ";
    position: absolute;
    width: 0;
    height: 0;
    left: auto;
    right: -20px;
    top: 0px;
    bottom: auto;
    border: 20px solid;
    border-color: #176cdb transparent transparent transparent;
    z-index: 2;
  }

  .prompt-response-text {
    position: relative;
    padding: 8px;
    border: 1px solid #e6e6e9;
    background-color: #47474c;
    border-radius: 12px;
    max-width: 70%;
    font-size: 18px;
  }

  .left::before {
    content: " ";
    position: absolute;
    width: 0;
    height: 0;
    right: auto;
    left: -23px;
    top: -1px;
    bottom: auto;
    border: 22px solid;
    border-color: #e6e6e9 transparent transparent transparent;
    z-index: -1;
  }

  .left::after {
    content: " ";
    position: absolute;
    width: 0;
    height: 0;
    right: auto;
    left: -20px;
    top: 0px;
    bottom: auto;
    border: 20px solid;
    border-color: #47474c transparent transparent transparent;
    z-index: 2;
  }
`;

// const PromptSentText = styled.div`
//   padding: 8px;
//   border: 1px solid #e6e6e9;
//   border-radius: 12px;
//   background-color: #176cdb;
//   max-width: 70%;
//   font-size: 18px;
//   margin-left: auto;
//   margin-bottom: 8px;
// `;

// const PromptResponseText = styled.div`
//   padding: 8px;
//   border: 1px solid #e6e6e9;
//   background-color: #47474c;
//   border-radius: 12px;
//   max-width: 70%;
//   font-size: 18px;
// `;

/** Exports */
export default ResponseCard;

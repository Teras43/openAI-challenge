import styled from "styled-components";

type CardProps = {
  prompt: string;
  promptResponse: string;
};

const ResponseCard = ({ prompt, promptResponse }: CardProps) => {
  return (
    <CardWrapper>
      <h3>{prompt}</h3>
      <div>{promptResponse}</div>
    </CardWrapper>
  );
};

/** Styles */
const CardWrapper = styled.div`
  height: 100%auto;
  width: 100%auto;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin-bottom: 5px;
  background-color: lightgray;
  padding: 8px 12px;
  margin-right: 5px;
`;

/** Exports */
export default ResponseCard;

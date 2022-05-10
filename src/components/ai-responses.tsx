import styled from "styled-components";

const AiResponses = () => {
  return (
    <ResponseWrap>
      <ResponseHeader>Responses</ResponseHeader>
      <ResponseBody />
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
  border: 1px solid black;
`;

/** Exports */
export default AiResponses;

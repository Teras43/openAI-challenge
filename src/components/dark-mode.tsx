import styled from "styled-components";

const DarkModeToggle = () => {
  return (
    <ToggleWrap>
      <div>Toggle Here</div>
    </ToggleWrap>
  );
};

/** Styles */
const ToggleWrap = styled.div`
  height: 5%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

/** Exports */
export default DarkModeToggle;

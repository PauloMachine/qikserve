import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  height: 48px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 40px;
  border: none;
  background-color: ${(props) => props.theme?.webSettings?.primaryColour};
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
  }
`;

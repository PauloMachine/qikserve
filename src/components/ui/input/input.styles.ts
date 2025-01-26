import type { CSSProperties } from "react";
import styled from "styled-components";
import Flex from "../flex";

interface TStyledInput {
  style?: CSSProperties;
}

export const StyledFlex = styled(Flex)`
  width: 100%;
  justify-content: flex-start;
  height: 44px;
  gap: 10px;
  opacity: 0px;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #8a94a4;

  &:focus-within {
    svg {
      color: #8a94a4 !important;
    }
  }

  svg {
    margin: 0px 0px 0px 10px;
  }
`;

export const StyledInput = styled.input<TStyledInput>`
  border: 0;
  width: 90%;
  box-sizing: border-box;
  background-color: #ffffff;
  outline: none;
  font-size: 16px;
  color: #2c2c2c;
  ${({ style }) => style && { ...style }}

  @media (max-width: 600px) {
    width: 70%;
  }
`;

export const StyledContainer = styled(Flex)`
  align-items: flex-start;
  justify-content: flex-start;
`;

import type { CSSProperties } from "react";
import styled from "styled-components";

export const StyledInput = styled.input<{ style?: CSSProperties }>`
  appearance: none;
  border-radius: 50%;
  border: 4px solid #5f5f5f;
  width: 20px;
  height: 20px;

  &:hover {
    cursor: pointer;
  }

  &:checked {
    border-color: #5f5f5f;
    background-color: #5f5f5f;
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1);
  }

  &:checked::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: auto;
  }

  ${({ style }) => style && { ...style }}
`;

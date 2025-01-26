import styled from "styled-components";
import type { TTypography } from "./typography.types";

export const Typography = styled.span<TTypography>`
  color: ${({ color }) => color || "#FFF"};
  font-size: ${({ size }) => (size ? `${size}px` : "14px")};
  font-weight: ${({ weight }) => Number(weight) || 400};
  ${({ wrap }) =>
    wrap === "nowrap" &&
    `
      display: -webkit-box;
      min-height: 20px;
      max-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis; 
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
  `}
`;

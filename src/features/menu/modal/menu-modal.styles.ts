import Flex from "src/components/ui/flex";
import styled from "styled-components";

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 99999;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 320px;
  top: 0;
  position: relative !important;
`;

export const ContainerBlur = styled(Flex)<{
  isMobile: string;
}>`
  gap: 10px;
  position: sticky;
  bottom: 0;
  background-color: ${({ isMobile }) =>
    Boolean(isMobile === "true") ? "#F8F9FA" : "transparent"};
  padding: 16px;
  backdrop-filter: blur(4px);
  border-top: ${({ isMobile }) =>
    Boolean(isMobile === "true") ? "1px solid #dadada" : "none"};
`;

export const Content = styled(Flex)<{
  isMobile: string;
}>`
  padding: 16px;
  align-items: flex-start;
  background-color: #f8f9fa;
  border-top: ${({ isMobile }) =>
    Boolean(isMobile === "true") ? "1px solid #dadada" : "none"};
`;

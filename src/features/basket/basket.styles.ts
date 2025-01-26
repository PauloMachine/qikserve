import Flex from "src/components/ui/flex";
import styled from "styled-components";

export const Container = styled(Flex)`
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff;
`;

export const Content = styled(Flex)<{
  isMobile: string;
}>`
  box-shadow: ${({ isMobile }) =>
    Boolean(isMobile === "true") ? "none" : "0 2px 4px rgba(0, 0, 0, 0.1)"};
  align-items: flex-start;
`;

export const Summary = styled(Flex)`
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid #dadada;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 99999;
`;

import styled from "styled-components";
import Flex from "../ui/flex";

export const Container = styled(Flex)<{
  isMobile: string;
}>`
  gap: 16px;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: ${({ isMobile }) =>
    Boolean(isMobile === "true") ? "#ffffff" : "#eeeeee"};
`;

export const Content = styled(Flex)<{
  isMobile: string;
}>`
  padding-top: ${({ isMobile }) =>
    Boolean(isMobile === "true") ? "0px" : "32px"};
  padding-bottom: 32px;
  gap: 24px;
  flex-direction: row;
  align-items: flex-start;
  background-color: ${({ isMobile }) =>
    Boolean(isMobile === "true") ? "transparent" : "#f8f9fa"};
`;

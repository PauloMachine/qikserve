import Flex from "src/components/ui/flex";
import styled from "styled-components";

export const Container = styled(Flex)<{
  isMobile: string;
}>`
  padding: 24px;
  gap: 44px;
  align-items: center;
  cursor: pointer;
  max-width: 600px;
  background-color: #fff;
  box-shadow: ${({ isMobile }) =>
    Boolean(isMobile === "true") ? "none" : " 0px 2px 14px 0px #00000024"};
`;

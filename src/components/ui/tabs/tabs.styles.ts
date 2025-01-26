import styled from "styled-components";
import Flex from "../flex";
import Typography from "../typography";

export const StyledFlex = styled(Flex)<{ route?: string; isMobile?: boolean }>`
  width: ${({ isMobile }) => (isMobile ? "100%" : "232px")};
  height: 100%;
  cursor: pointer;
  border-bottom-style: solid;
  border-bottom-width: ${({ isMobile }) => (isMobile ? "0px" : "5px")};
  border-bottom-color: ${({ route }) =>
    Boolean(route === "true") ? "#ffffff" : "transparent"};

  &:hover {
    border-bottom-color: ${({ isMobile }) =>
      isMobile ? "transparent" : "#ffffff"};
  }

  justify-content: center;

  ${({ isMobile }) =>
    isMobile &&
    `
      display: flex;
      align-items: center;
      flex-direction: row;
      padding: 0 16px;
    `}
`;

export const StyledTypography = styled(Typography)`
  color: "#ffffff";
`;

export const KebabMenu = styled.div`
  position: absolute;
  top: 60px;
  right: 10px;
  background-color: ${(props) => props.theme?.webSettings?.primaryColour};
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  min-width: 150px;
`;

export const KebabItem = styled.div<{ route: string }>`
  padding: 8px 16px;
  color: #ffffff;
  cursor: pointer;
  border-bottom: 1px solid transparent;

  &:hover {
    background-color: #444;
    border-bottom-color: ${({ route }) =>
      Boolean(route === "true") ? "#ffffff" : "transparent"};
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const KebabIconWrapper = styled.div`
  position: absolute;
  top: 13px;
  right: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 99999;
`;

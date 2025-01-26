import Flex from "src/components/ui/flex";
import styled from "styled-components";

export const Container = styled(Flex)<{
  selectedTab: string;
}>`
  border: none;
  background: none;
  cursor: pointer;
  text-align: center;
  height: 146px;
  width: 104px;

  align-items: center;
  justify-content: space-around;

  border-bottom-width: ${({ selectedTab }) =>
    Boolean(selectedTab === "true") ? "2px" : "none"};
  border-bottom-style: ${({ selectedTab }) =>
    Boolean(selectedTab === "true") ? "solid" : "none"};
  border-bottom-color: ${(props) => props.theme?.webSettings?.primaryColour};

  &:hover {
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: ${(props) =>
      props.theme?.webSettings?.primaryColourHover};
  }
`;

export const Content = styled(Flex)<{
  selectedTab: string;
}>`
  padding: 4px;
  border-radius: 50%;
  width: 74px;
  height: 74px;
  overflow: hidden;

  border-width: ${({ selectedTab }) =>
    Boolean(selectedTab === "true") ? "2px" : "none"};
  border-style: ${({ selectedTab }) =>
    Boolean(selectedTab === "true") ? "solid" : "none"};
  border-color: ${(props) => props.theme?.webSettings?.primaryColour};

  &:hover {
    border-width: 2px;
    border-style: solid;
    border-color: ${(props) => props.theme?.webSettings?.primaryColourHover};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

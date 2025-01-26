import styled from "styled-components";
import Flex from "../ui/flex";

export const Container = styled(Flex)`
  background-color: ${(props) => props.theme.webSettings.navBackgroundColour};
`;

export const Content = styled(Flex)`
  wrap: wrap;
  flex-direction: row;
  height: 52px;
  background-color: ${(props) => props.theme.webSettings.navBackgroundColour};
`;

export const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

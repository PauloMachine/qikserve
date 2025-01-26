import Flex from "src/components/ui/flex";
import styled from "styled-components";

export const Container = styled(Flex)`
  padding-top: 16px;
  padding-bottom: 16px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: #f8f9fa;
  }
`;

export const Image = styled.img`
  width: 128px;
  height: 85px;
  border-radius: 6px;
  object-fit: cover;
`;

export const Badge = styled(Flex)`
  width: 18px;
  height: 18px;
  color: #fff;
  font-size: 14px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.webSettings.primaryColour};
`;

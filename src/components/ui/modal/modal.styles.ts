import styled from "styled-components";
import Flex from "../flex";

export const StyledModal = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const StyledModalContainer = styled(Flex)`
  background-color: #fff;
  width: 100%;
  max-width: 480px;
  position: relative;
`;

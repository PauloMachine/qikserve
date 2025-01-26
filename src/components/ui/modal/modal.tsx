import ReactDOM from "react-dom";
import { useModal } from "./modal.context";
import { StyledModal, StyledModalContainer } from "./modal.styles";
import type { TModal } from "./modal.types";

const Modal = ({ children }: TModal) => {
  const { activeModal } = useModal();

  if (!activeModal) {
    return null;
  }

  return ReactDOM.createPortal(
    <StyledModal>
      <StyledModalContainer align="flex-start">{children}</StyledModalContainer>
    </StyledModal>,
    document.body
  );
};

export default Modal;

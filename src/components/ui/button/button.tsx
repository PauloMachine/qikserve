import { StyledButton } from "./button.styles";
import type { TButton } from "./button.types";

const Button = ({ children, onClick, disabled = false, style }: TButton) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} style={style}>
      {children}
    </StyledButton>
  );
};

export default Button;

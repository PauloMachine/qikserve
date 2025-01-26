import { StyledInput } from "./radio.styles";
import type { TRadio } from "./radio.types";

const Radio = ({
  name = "",
  value = "",
  checked = false,
  onChange,
  style,
  ...props
}: TRadio) => {
  return (
    <StyledInput
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      style={style}
      {...props}
    />
  );
};

export default Radio;

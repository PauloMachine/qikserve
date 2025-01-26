import Typography from "../typography";
import { StyledContainer, StyledFlex, StyledInput } from "./input.styles";
import type { TInput } from "./input.types";
import * as Io5Icons from "react-icons/io5";
import { MdClose } from "react-icons/md";

const Input = ({
  label,
  value = "",
  onChange,
  onClear,
  style,
  type = "text",
  placeholder = "",
  debounceDelay = 300,
  icon = "IoSearchOutline",
  ...props
}: TInput) => {
  const IconComponent = Io5Icons[icon];

  return (
    <StyledContainer>
      {label && (
        <Typography size="10" color={value ? "#2C2C2C" : "#8A94A4"}>
          {label}
        </Typography>
      )}
      <StyledFlex
        direction="row"
        align="center"
        justify="flex-start"
        wrap="wrap"
      >
        {IconComponent && (
          <IconComponent size={24} color={value ? "#2C2C2C" : "#8A94A4"} />
        )}

        <StyledInput
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          style={style}
          {...props}
        />

        {value && (
          <MdClose
            size={16}
            color="#2C2C2C"
            onClick={onClear}
            style={{ cursor: "pointer", marginLeft: 30 }}
          />
        )}
      </StyledFlex>
    </StyledContainer>
  );
};

export default Input;

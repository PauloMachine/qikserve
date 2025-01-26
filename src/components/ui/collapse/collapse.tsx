import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Flex from "src/components/ui/flex";
import Typography from "../typography";
import type { ICollapse } from "./collapse.types";
import { useLayout } from "src/components/layout/layout.context";

const Collapse = ({ title, children }: ICollapse) => {
  const [isOpen, setIsOpen] = useState(true);
  const { theme } = useLayout();

  const toggleCollapse = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Flex direction="column">
      <Flex
        align="center"
        direction="row"
        justify="space-between"
        onClick={toggleCollapse}
        style={{ cursor: "pointer", marginBottom: isOpen ? 14 : 0 }}
      >
        <Typography size="24" color="#121212" weight="600">
          {title}
        </Typography>

        {isOpen ? (
          <IoIosArrowUp size={24} color={theme?.webSettings.primaryColour} />
        ) : (
          <IoIosArrowDown size={24} color={theme?.webSettings.primaryColour} />
        )}
      </Flex>

      {isOpen && <>{children}</>}
    </Flex>
  );
};

export default Collapse;

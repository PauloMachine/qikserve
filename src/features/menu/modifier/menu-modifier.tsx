import Flex from "src/components/ui/flex";
import Typography from "src/components/ui/typography";
import Radio from "src/components/ui/radio";
import { useLayout } from "src/components/layout/layout.context";
import type { TModifier } from "./menu-modifier.types";

const MenuModifier = ({ item, modifier, setModifier }: TModifier) => {
  const { useFormatMoney } = useLayout();

  return (
    <Flex px="16" py="16" direction="row" onClick={() => setModifier(item)}>
      <Flex gap="4" align="flex-start">
        <Typography size="16" color="#121212" weight="500">
          {item.name}
        </Typography>
        <Typography size="16" color="#464646" weight="400">
          {useFormatMoney(item.price)}
        </Typography>
      </Flex>

      <Radio
        value={item.id}
        name={`modifier-${item?.id}`}
        checked={modifier?.id === item.id}
        onChange={() => setModifier(item)}
      />
    </Flex>
  );
};

export default MenuModifier;

import { IoAddCircle, IoRemoveCircle } from "react-icons/io5";
import Typography from "src/components/ui/typography";
import Flex from "src/components/ui/flex";
import type { TBasketItemSum } from "./basket.types";
import { Container } from "./basket.styles";
import { useLayout } from "src/components/layout/layout.context";

const BasketItem = ({ item, onIncrement, onDecrement }: TBasketItemSum) => {
  const { theme, isMobile, useFormatMoney } = useLayout();
  const itemPrice = useFormatMoney(item.price);

  return (
    <Container>
      <Flex gap="4" align="flex-start">
        <Typography weight="400" size="16" color="#121212">
          {item.name}
        </Typography>
        {item.modifier && (
          <Typography weight="400" size="16" color="#5F5F5F">
            {item.modifier.name}
            {isMobile && ` (${itemPrice})`}
          </Typography>
        )}
        <Flex direction="row" justify="flex-start" gap="16">
          <IoRemoveCircle
            size={20}
            style={{ cursor: "pointer" }}
            color={theme?.webSettings.primaryColour}
            onClick={() => onDecrement(item.uniqueKey)}
          />
          <Typography weight="700" size="16" color="#121212">
            {item.quantity}
          </Typography>
          <IoAddCircle
            size={20}
            style={{ cursor: "pointer" }}
            color={theme?.webSettings.primaryColour}
            onClick={() => onIncrement(item.uniqueKey)}
          />
        </Flex>
      </Flex>
      <Typography weight="500" size="16" color="#121212">
        {useFormatMoney(item.price * item.quantity)}
      </Typography>
    </Container>
  );
};

export default BasketItem;

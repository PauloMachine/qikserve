import { useModal } from "src/components/ui/modal/modal.context";
import Flex from "src/components/ui/flex";
import Typography from "src/components/ui/typography";
import { type TItem } from "../menu.types";
import { Badge, Container, Image } from "./menu-item.styles";
import { useSelector } from "react-redux";
import type { RootState } from "src/app/store";
import { useLayout } from "src/components/layout/layout.context";

const MenuItem = ({ item }: { item: TItem }) => {
  const { openModal } = useModal();
  const { useFormatMoney } = useLayout();

  const totalQuantityInBasket = useSelector((state: RootState) => {
    const items = state.basket.items.filter(
      (basketItem) => basketItem.id === item.id
    );

    return (
      items.reduce((sum, basketItem) => sum + basketItem.quantity, 0) || null
    );
  });

  return (
    <Container onClick={() => openModal("menuModal", item)}>
      <Flex gap="4" align="flex-start" style={{ maxWidth: 325 }}>
        <Flex direction="row" justify="flex-start" gap="8">
          {totalQuantityInBasket && <Badge>{totalQuantityInBasket}</Badge>}
          <Typography size="16" color="#121212" weight="500">
            {item.name}
          </Typography>
        </Flex>

        {item.description && (
          <Typography size="16" color="#464646" weight="300" wrap="nowrap">
            {item.description}
          </Typography>
        )}

        <Typography size="16" color="#464646" weight="500">
          {useFormatMoney(item.price)}
        </Typography>
      </Flex>

      {item.images && <Image src={item.images[0]?.image} alt={item.name} />}
    </Container>
  );
};

export default MenuItem;

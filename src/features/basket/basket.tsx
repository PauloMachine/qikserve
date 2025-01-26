import { useDispatch, useSelector } from "react-redux";
import Flex from "src/components/ui/flex";
import Button from "src/components/ui/button";
import BasketItem from "./basket-item";
import BasketSummary from "./basket-summary";
import BasketEmptyState from "./basket-empty-state";
import { updateQuantity, removeFromBasket } from "./basket.slice";
import type { RootState } from "src/app/store";
import Typography from "src/components/ui/typography";
import { CloseButton, Content } from "./basket.styles";
import { useLayout } from "src/components/layout/layout.context";
import { IoClose } from "react-icons/io5";
import { useModal } from "src/components/ui/modal/modal.context";

const Basket = () => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const { theme, isMobile, translation } = useLayout();
  const { items, total } = useSelector((state: RootState) => state.basket);

  const handleIncrement = (uniqueKey: string) => {
    const item = items.find((item) => item.uniqueKey === uniqueKey);
    if (item) {
      dispatch(updateQuantity({ uniqueKey, quantity: item.quantity + 1 }));
    }
  };

  const handleDecrement = (uniqueKey: string) => {
    const item = items.find((item) => item.uniqueKey === uniqueKey);
    if (item) {
      if (item.quantity > 1) {
        dispatch(updateQuantity({ uniqueKey, quantity: item.quantity - 1 }));
      } else {
        dispatch(removeFromBasket({ uniqueKey }));
      }
    }
  };

  return (
    <Flex
      gap="50"
      justify="space-between"
      style={{
        width: isMobile ? "100%" : 320,
        paddingBottom: isMobile ? 16 : 0,
        height: isMobile ? "100vh" : "auto",
        backgroundColor: isMobile ? "#f8f9fa" : "transparent",
      }}
    >
      <Content isMobile={String(isMobile)}>
        <Flex
          px="16"
          py="16"
          align={isMobile ? "center" : "flex-start"}
          style={{
            backgroundColor: isMobile ? "#FFF" : "#f8f9fa",
            borderBottom: isMobile ? "1px solid #dadada" : "none",
          }}
        >
          <CloseButton onClick={closeModal}>
            <IoClose size={24} color={theme?.webSettings.primaryColour} />
          </CloseButton>
          <Typography
            weight="500"
            size={isMobile ? "18" : "24"}
            color={isMobile ? "#121212" : "#464646"}
          >
            {translation("basketTitle")}
          </Typography>
        </Flex>

        {items.length > 0 ? (
          <>
            {items.map((item) => (
              <BasketItem
                key={item.uniqueKey}
                item={item}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              />
            ))}
            <BasketSummary total={total} />
          </>
        ) : (
          <BasketEmptyState />
        )}
      </Content>

      {items.length > 0 && (
        <Flex px="16">
          <Button>
            <Typography size="18" weight="500" color="#FFFFFF">
              {translation("checkoutNow")}
            </Typography>
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default Basket;

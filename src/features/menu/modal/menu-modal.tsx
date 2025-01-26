import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../basket/basket.slice";
import { IoAddCircle, IoCloseCircle, IoRemoveCircle } from "react-icons/io5";
import { useModal } from "src/components/ui/modal/modal.context";
import Modal from "src/components/ui/modal";
import Typography from "src/components/ui/typography";
import Flex from "src/components/ui/flex";
import type { TModifierItem } from "../menu.types";
import Button from "src/components/ui/button";
import { useLayout } from "src/components/layout/layout.context";
import MenuModifier from "../modifier";
import {
  CloseButton,
  ContainerBlur,
  Content,
  Image,
} from "./menu-modal.styles";

const MenuModal = () => {
  const dispatch = useDispatch();
  const { theme, isMobile, useFormatMoney, translation } = useLayout();
  const { selectedItem, closeModal, openModal } = useModal();
  const [quantity, setQuantity] = useState(1);
  const [modifier, setModifier] = useState<TModifierItem | null>(null);

  const calculateTotalPrice = () => {
    let basePrice = selectedItem?.price || 0;

    if (selectedItem?.modifiers?.length && modifier?.id) {
      const modifiers = selectedItem.modifiers[0];

      const selectedOption = modifiers.items.find(
        (item: TModifierItem) => item.id === modifier?.id
      );

      if (selectedOption) {
        basePrice += selectedOption.price;
      }
    }

    return basePrice * quantity;
  };

  const isAddButtonDisabled = () => {
    const hasModifiers = selectedItem?.modifiers?.length > 0;
    const isRequiredModifier = selectedItem?.modifiers?.[0]?.minChoices > 0;
    return hasModifiers && isRequiredModifier && !modifier?.id;
  };

  const totalPrice = calculateTotalPrice();
  const handleAddToBasket = () => {
    const itemToAdd = {
      ...selectedItem,
      price: selectedItem.price + (modifier?.price || 0),
      modifier,
      quantity,
    };

    closeModal();
    dispatch(addToBasket(itemToAdd));
    if (isMobile) openModal("basketModal");
  };

  useEffect(() => {
    setModifier(null);
    setQuantity(1);
  }, [selectedItem]);

  return (
    <Modal>
      <Flex
        direction="column"
        justify="space-between"
        style={{
          overflowY: "auto",
          height: isMobile ? "100vh" : "auto",
          maxHeight: isMobile ? "100vh" : 670,
        }}
      >
        <Flex>
          <CloseButton onClick={closeModal}>
            <IoCloseCircle size={28} color="#FFFFFF" />
          </CloseButton>
          <Image
            alt={selectedItem?.name || "Imagem não encontrada"}
            src={
              selectedItem?.images && selectedItem.images.length > 0
                ? selectedItem.images[0]?.image
                : "/images/imageNotFound.jpg"
            }
          />
          <Flex gap="8" align="flex-start">
            <Flex px="16" py="16" gap="8" align="flex-start">
              <Typography size="24" color="#121212" weight="700">
                {selectedItem?.name}
              </Typography>
              {selectedItem?.description && (
                <Typography size="16" color="#464646" weight="400">
                  {selectedItem?.description}
                </Typography>
              )}
            </Flex>

            {selectedItem?.modifiers?.[0] && (
              <Flex direction="column" gap="8">
                <Content isMobile={String(isMobile)}>
                  <Typography size="16" color="#464646" weight="700">
                    {selectedItem.modifiers[0].name}
                  </Typography>
                  <Typography size="16" color="#5F5F5F" weight="400">
                    {selectedItem.modifiers[0]?.maxChoices === 1
                      ? translation("optionOneMaxChoices")
                      : translation("optionMaxChoices")}
                  </Typography>
                </Content>
                {selectedItem.modifiers[0].items?.map((item: TModifierItem) => (
                  <MenuModifier
                    item={item}
                    key={item.id}
                    modifier={modifier}
                    setModifier={setModifier}
                  />
                ))}
              </Flex>
            )}
          </Flex>
        </Flex>

        <ContainerBlur isMobile={String(isMobile)}>
          <Flex gap="16" direction="row">
            <IoRemoveCircle
              size={32}
              style={{ cursor: "pointer" }}
              color={quantity === 1 ? "#DDD" : theme?.webSettings.primaryColour}
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            />
            <Typography weight="700" size="24" color="#121212">
              {quantity}
            </Typography>
            <IoAddCircle
              size={32}
              style={{ cursor: "pointer" }}
              color={theme?.webSettings.primaryColour}
              onClick={() => setQuantity((prev) => prev + 1)}
            />
          </Flex>

          <Flex px="16" gap="16">
            <Button
              onClick={handleAddToBasket}
              disabled={isAddButtonDisabled()}
            >
              <Typography size="18" weight="500" color="#FFFFFF">
                {translation("addToOrder")} • {useFormatMoney(totalPrice)}
              </Typography>
            </Button>
          </Flex>
        </ContainerBlur>
      </Flex>
    </Modal>
  );
};

export default MenuModal;

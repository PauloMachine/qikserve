import Modal from "src/components/ui/modal";
import Flex from "src/components/ui/flex";
import Basket from "./basket";

const BasketModal = () => {
  return (
    <Modal>
      <Flex
        direction="column"
        justify="space-between"
        style={{
          height: "100vh",
          overflowY: "auto",
          maxHeight: "100vh",
        }}
      >
        <Basket />
      </Flex>
    </Modal>
  );
};

export default BasketModal;

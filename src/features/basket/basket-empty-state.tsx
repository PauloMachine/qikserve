import Typography from "src/components/ui/typography";
import { Container } from "./basket.styles";
import { useLayout } from "src/components/layout/layout.context";

const BasketEmptyState = () => {
  const { translation } = useLayout();

  return (
    <Container>
      <Typography size="16" weight="400" color="#464646">
        {translation("basketEmptyState")}
      </Typography>
    </Container>
  );
};

export default BasketEmptyState;

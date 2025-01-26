import Typography from "src/components/ui/typography";
import { Summary } from "./basket.styles";
import { useLayout } from "src/components/layout/layout.context";

const BasketSummary = ({ total }: { total: number }) => {
  const { translation, useFormatMoney } = useLayout();

  return (
    <>
      <Summary>
        <Typography size="16" weight="400" color="#121212">
          {translation("subtotal")}
        </Typography>
        <Typography size="16" weight="500" color="#121212">
          {useFormatMoney(total)}
        </Typography>
      </Summary>

      <Summary>
        <Typography size="24" weight="300" color="#121212">
          {translation("total")}
        </Typography>
        <Typography size="24" weight="500" color="#121212">
          {useFormatMoney(total)}
        </Typography>
      </Summary>
    </>
  );
};

export default BasketSummary;

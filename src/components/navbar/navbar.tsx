import { useLayout } from "../layout/layout.context";
import Tabs from "../ui/tabs";
import type { TTab } from "../ui/tabs/tabs.types";
import { Container, Content, Image } from "./navbar.styles";

const Navbar = () => {
  const { theme, isMobile, translation } = useLayout();

  const tabs: TTab[] = [
    {
      name: "MENU",
      route: "menu",
    },
    {
      name: translation("pageAccess"),
      route: "access",
    },
    {
      name: translation("pageContact"),
      route: "contact",
    },
  ];

  return (
    <Container>
      <Content>
        <Tabs tabs={tabs} isMobile={isMobile} />
      </Content>
      <Image src={`${theme?.webSettings?.bannerImage}`} />
    </Container>
  );
};

export default Navbar;

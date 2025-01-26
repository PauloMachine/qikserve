import { useEffect, type ReactNode } from "react";
import { useGetVenue } from "src/features/venue/venue.hooks";
import Basket from "src/features/basket";
import Navbar from "../navbar";
import Flex from "../ui/flex";
import Input from "../ui/input";
import { Container, Content } from "./layout.styles";
import { useLayout } from "./layout.context";

const Layout = ({ children }: { children: ReactNode }) => {
  const { data: venue, isPending } = useGetVenue(9);
  const { setTheme, isMobile, translation } = useLayout();

  useEffect(() => {
    if (venue) {
      setTheme(venue);
      document.title = venue.name;
    }
  }, [venue, setTheme]);

  return (
    <Container isMobile={String(isMobile)}>
      <Navbar />
      <Flex gap={isMobile ? "0" : "16"} style={{ maxWidth: 1024 }}>
        <Flex px={isMobile ? "16" : "0"}>
          <Input
            value=""
            onChange={() => ""}
            placeholder={translation("searchMenuItems")}
          />
        </Flex>
        <Content isMobile={String(isMobile)}>
          {children}
          {!isPending && !isMobile && <Basket />}
        </Content>
      </Flex>
    </Container>
  );
};

export default Layout;

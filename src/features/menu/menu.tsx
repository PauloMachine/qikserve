import { useState } from "react";
import { useGetMenu } from "./menu.hooks";
import MenuTabs from "./tabs";
import MenuSections from "./sections";
import MenuModal from "./modal";
import { Container } from "./menu.styles";
import { useModal } from "src/components/ui/modal/modal.context";
import BasketModal from "../basket/basket-modal";
import type { TSection } from "./menu.types";
import { useLayout } from "src/components/layout/layout.context";

const Menu = () => {
  const { isMobile } = useLayout();
  const { data: menu } = useGetMenu();
  const { activeModal } = useModal();
  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  const handleTabClick = (sectionName: string) => {
    setSelectedTab((prev) => (prev === sectionName ? null : sectionName));
  };

  const filteredSections =
    selectedTab === null
      ? menu?.sections || []
      : menu?.sections.filter(
          (section: TSection) => section.name === selectedTab
        ) || [];

  if (!menu) return null;

  return (
    <Container isMobile={String(isMobile)}>
      <MenuTabs
        sections={menu.sections}
        selectedTab={selectedTab}
        onTabClick={handleTabClick}
      />
      <MenuSections sections={filteredSections} />
      {activeModal === "menuModal" && <MenuModal />}
      {activeModal === "basketModal" && <BasketModal />}
    </Container>
  );
};

export default Menu;

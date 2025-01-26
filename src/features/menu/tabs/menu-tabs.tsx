import React from "react";
import { TSection } from "../menu.types";
import { Container, Content, Image } from "./menu-tabs.styles";
import Typography from "src/components/ui/typography";
import Flex from "src/components/ui/flex";
import type { TMenuTabs } from "./menu.types";

const MenuTabs = ({ sections, selectedTab, onTabClick }: TMenuTabs) => {
  return (
    <Flex gap="12" direction="row" justify="flex-start">
      {sections?.map((section: TSection) => (
        <Container
          key={section.id}
          selectedTab={String(selectedTab === section.name)}
          onClick={() => onTabClick(section.name)}
        >
          <Content selectedTab={String(selectedTab === section.name)}>
            <Image src={section.images[0]?.image} alt={section.name} />
          </Content>
          <Typography
            size="16"
            color="#121212"
            weight={selectedTab === section.name ? "600" : "500"}
          >
            {section.name}
          </Typography>
        </Container>
      ))}
    </Flex>
  );
};

export default MenuTabs;

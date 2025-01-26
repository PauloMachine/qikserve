import { TSection, TItem } from "../menu.types";
import MenuItem from "../item";
import Collapse from "src/components/ui/collapse";
import Flex from "src/components/ui/flex";

const MenuSections = ({ sections }: { sections: TSection[] }) => (
  <Flex direction="column" align="flex-start" gap="34">
    {sections?.map((section: TSection) => (
      <Collapse key={section.id} title={section.name}>
        {section.items?.map((item: TItem) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </Collapse>
    ))}
  </Flex>
);

export default MenuSections;

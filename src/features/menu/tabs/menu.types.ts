import type { TSection } from "../menu.types";

export type TMenuTabs = {
  sections: TSection[];
  selectedTab: string | null;
  onTabClick: (sectionName: string) => void;
};

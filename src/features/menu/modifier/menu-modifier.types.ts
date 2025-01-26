import type { TModifierItem } from "../menu.types";

export type TModifier = {
  item: TModifierItem;
  modifier: TModifierItem | null;
  setModifier: (item: TModifierItem) => void;
};

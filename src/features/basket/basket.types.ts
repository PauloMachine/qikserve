import type { TModifierItem } from "../menu/menu.types";

export type TBasketItem = {
  uniqueKey: string;
  id: number;
  name: string;
  description?: string;
  modifier?: TModifierItem;
  price: number;
  quantity: number;
};

export type TBasketState = {
  items: TBasketItem[];
  total: number;
};

export type TBasketItemSum = {
  item: TBasketItem;
  onIncrement: (uniqueKey: string) => void;
  onDecrement: (uniqueKey: string) => void;
};

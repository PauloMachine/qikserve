export type TImage = {
  id: number;
  image: string;
};

export type TModifierItem = {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string;
  qty?: number;
  available: boolean;
};

export type TModifier = {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: TModifierItem[];
};

export type TItem = {
  id: number;
  name: string;
  description?: string | null;
  alcoholic: number;
  price: number;
  position: number;
  visible: number;
  availabilityType: string;
  sku: string;
  modifiers?: TModifier[];
  images?: TImage[];
  available: boolean;
};

export type TSection = {
  id: number;
  name: string;
  description?: string | null;
  position: number;
  visible: number;
  images: TImage[];
  items: TItem[];
};

export type TMenu = {
  id: number;
  name: string;
  type: string;
  collapse: number;
  sections: TSection[];
};

import type { ReactNode } from "react";
import type { TItem } from "src/features/menu/menu.types";

export type TModal = {
  children: ReactNode;
  onClose?: () => void;
  onSave?: () => void;
};

export type TModalContext = {
  activeModal: string | null;
  selectedItem: any | null;
  openModal: (modalName: string, item?: TItem) => void;
  closeModal: () => void;
};

export type TModalProvider = {
  children: ReactNode;
};

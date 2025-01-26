import React, { createContext, useContext, useState } from "react";
import type { TModalContext } from "./modal.types";

export const ModalContext = createContext<TModalContext | null>(null);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (modalName: string, item: any = null) => {
    setActiveModal(modalName);
    setSelectedItem(item);
  };

  const closeModal = () => {
    setActiveModal(null);
    setSelectedItem(null);
  };

  return (
    <ModalContext.Provider
      value={{
        activeModal,
        selectedItem,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

import { useState } from "react";

export const useModal = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);
  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);
  return { isOpen, openModal, closeModal };
};

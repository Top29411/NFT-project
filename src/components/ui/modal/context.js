import { createContext, useContext } from "react";

export const ModalContext = createContext({
  isOpen: false,
  disabled: false,
  close: () => {},
});

export const ModalHook = () => useContext(ModalContext);

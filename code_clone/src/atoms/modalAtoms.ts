import { atom } from "recoil";
type ModalState = {
  isOpen: boolean;
  type: "login" | "register" | "forgotPassword";
};

const initialModalState: ModalState = {
  isOpen: true,
  type: "login",
};

export const modalState = atom<ModalState>({
  key: "modalState",
  default: initialModalState,
});

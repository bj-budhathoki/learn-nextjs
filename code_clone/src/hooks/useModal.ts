"use client";
import { modalState } from "@/atoms/modalAtoms";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

export const useModal = () => {
  const setModalState = useSetRecoilState(modalState);
  const closeModal = () => {
    setModalState((prev) => ({
      ...prev,
      isOpen: false,
      type: "login",
    }));
  };
  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") closeModal();
  };
  useEffect(() => {
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);
  return closeModal;
};

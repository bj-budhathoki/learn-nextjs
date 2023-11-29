"use client";
import React from "react";
import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { signIn } from "next-auth/react";
import { modalState } from "@/atoms/modalAtoms";
type NavbarProps = {};
export const Navbar: React.FC<NavbarProps> = (): JSX.Element => {
  const setModalState = useSetRecoilState(modalState);
  const handleClick = () => {
    setModalState((prev) => ({ ...prev, isOpen: true }));
    signIn();
  };
  return (
    <div className="flex items-center justify-between px-2 sm:px-12 md:px-24">
      <Link href="/" className="flex items-center justify-center h-20">
        logo
      </Link>
      <div className="flex items-center">
        <button
          className="px-2 py-1 text-sm font-medium text-white transition duration-300 ease-in-out border-2 border-transparent rounded-md bg-brand-orange sm:px-4 hover:text-brand-orange hover:bg-white hover:border-brand-orange"
          onClick={handleClick}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

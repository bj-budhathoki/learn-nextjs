"use client";
import React from "react";
import { LoginContainer } from "./Login";
import { SignUpContainer } from "./Signup";
import { ResetPassword } from "./ResetPassword";
import { useRecoilValue } from "recoil";
import { modalState } from "@/atoms/modalAtoms";

export const AuthContainer = () => {
  const authModalState = useRecoilValue(modalState);
  return (
    <div>
      {authModalState?.type === "login" ? (
        <LoginContainer />
      ) : authModalState?.type === "register" ? (
        <SignUpContainer />
      ) : (
        <ResetPassword />
      )}
    </div>
  );
};

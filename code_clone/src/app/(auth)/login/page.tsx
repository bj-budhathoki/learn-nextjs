"use client";
import React from "react";
import { useRecoilValue } from "recoil";
import { Modal } from "@/components";
import { AuthContainer } from "@/containers";
import { modalState } from "@/atoms/modalAtoms";

const Login = () => {
  const authModal = useRecoilValue(modalState);
  return <div>{authModal.isOpen && <AuthContainer />}</div>;
};

export default Login;

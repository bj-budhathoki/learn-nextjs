"use client";
import React from "react";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";

function RecoilRootWrapper({ children }: { children: JSX.Element }) {
  return (
    <SessionProvider>
      <RecoilRoot>{children}</RecoilRoot>
    </SessionProvider>
  );
}

export default RecoilRootWrapper;

import React from "react";
import { Navigation, Footer } from "../../components";
import { BaseLayoutMain, BaseLayoutStyle } from "./base-layout,style";

interface BaseLayoutProps {
  readonly children: React.ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <BaseLayoutStyle>
      <Navigation />
      <BaseLayoutMain>{children}</BaseLayoutMain>
      <Footer />
    </BaseLayoutStyle>
  );
}

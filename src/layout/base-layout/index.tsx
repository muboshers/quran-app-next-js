import React from "react";
import { BaseLayoutMain, BaseLayoutStyle } from "./base-layout,style";

interface BaseLayoutProps {
  readonly children: React.ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <BaseLayoutStyle>
      <BaseLayoutMain>{children}</BaseLayoutMain>
    </BaseLayoutStyle>
  );
}

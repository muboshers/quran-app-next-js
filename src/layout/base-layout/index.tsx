import React from "react";

import { Navbar, Sidebar, SidebarBottom, UserSidebar } from "@/src/components";

import {
  BaseLayoutMainStyle,
  BaseLayoutMain,
  BaseLayoutStyles,
  BaseLayoutMainChildren,
} from "./base-layout.styles";

interface BaseLayoutProps {
  readonly children: React.ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <BaseLayoutStyles>
      <Sidebar />
      <SidebarBottom />
      <BaseLayoutMainStyle>
        <Navbar />
        <BaseLayoutMain>
          <BaseLayoutMainChildren>{children}</BaseLayoutMainChildren>
          <UserSidebar />
        </BaseLayoutMain>
      </BaseLayoutMainStyle>
    </BaseLayoutStyles>
  );
}

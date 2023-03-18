import React from "react";
import Link from "next/link";

import {
  ArabicBookIcon,
  ArabicOneBook,
  BookmarkIcon,
  ShareIcon,
  HomeIcons,
} from "@/src/icons";

import {
  SidebarItems,
  SidebarStyle,
  SidebarLogo,
  SidebarLinks,
} from "@/src/components/sidebar/sidebar.styles";

export function Sidebar() {
  return (
    <SidebarStyle>
      <SidebarItems>
        <SidebarLogo>
          <Link href="/">
            <ArabicOneBook fill={"#fff"} />
          </Link>
        </SidebarLogo>
        <SidebarLinks>
          <Link href={"/"}>
            <HomeIcons />
          </Link>
          <Link href={"/all-books"}>
            <ArabicBookIcon />
          </Link>
          <Link href={"/whishlist"}>
            <BookmarkIcon />
          </Link>
          <Link href={"/whishlist"}>
            <ShareIcon />
          </Link>
        </SidebarLinks>
      </SidebarItems>
    </SidebarStyle>
  );
}

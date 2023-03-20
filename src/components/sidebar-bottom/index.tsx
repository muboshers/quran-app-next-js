import React from "react";
import Link from "next/link";
import {
  ArabicBookIcon,
  BookmarkIcon,
  ShareIcon,
  UserIconIcon,
  HomeIcons,
} from "@/src/icons";
import { SidebarBottomStyle } from "./sidebar-bottom.styles";

export function SidebarBottom() {
    return (
        <SidebarBottomStyle>
            <Link href={"/"}><HomeIcons/></Link>
            <Link href={"/all-books"}><ArabicBookIcon/></Link>
            <Link href={"/login"} className="user-icon"><UserIconIcon/></Link>
            <Link href={"/whishlist"}><BookmarkIcon/></Link>
            <Link href={"/whishlist"}><ShareIcon/></Link>
        </SidebarBottomStyle>
    );
}

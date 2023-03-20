import React from 'react';
import {
    SidebarItems,
    SidebarStyle,
    SidebarLogo,
    SidebarLinks,
    SidebarBottomItems, SidebarTopItems
} from "@/src/components/sidebar/sidebar.styles";
import {ArabicBookIcon, ArabicOneBook, BookmarkIcon, SettingsIcon, ShareIcon} from "@/src/icons";
import Link from "next/link";
import {HomeIcons} from "@/src/icons/home.icons";

function Sidebar() {
    return (
        <SidebarStyle>
            <SidebarItems>
              <SidebarTopItems>
                  <SidebarLogo>
                      <Link href="/">
                          <ArabicOneBook fill={"#fff"}/>
                      </Link>
                  </SidebarLogo>
                  <SidebarLinks>
                      <Link href={"/"}><HomeIcons /></Link>
                      <Link href={"/all-books"}><ArabicBookIcon /></Link>
                      <Link href={"/whishlist"}><BookmarkIcon /></Link>
                      <Link href={"/share"}><ShareIcon/></Link>
                  </SidebarLinks>
              </SidebarTopItems>
                <SidebarBottomItems>
                    <Link href={"/settings"}><SettingsIcon /></Link>
                </SidebarBottomItems>
            </SidebarItems>
        </SidebarStyle>
    );
}

export default Sidebar;
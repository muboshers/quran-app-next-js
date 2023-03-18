import React from 'react';
import {SidebarItems, SidebarStyle, SidebarLogo, SidebarLinks} from "@/src/components/sidebar/sidebar.styles";
import {ArabicBookIcon, ArabicOneBook, BookmarkIcon, ShareIcon} from "@/src/icons";
import Link from "next/link";
import {HomeIcons} from "@/src/icons/home.icons";

function Sidebar() {
    return (
        <SidebarStyle>
            <SidebarItems>
               <SidebarLogo>
                    <Link href="/">
                        <ArabicOneBook fill={"#fff"}/>
                    </Link>
               </SidebarLogo>
                <SidebarLinks>
                    <Link href={"/"}><HomeIcons /></Link>
                    <Link href={"/all-books"}><ArabicBookIcon /></Link>
                    <Link href={"/whishlist"}><BookmarkIcon /></Link>
                    <Link href={"/whishlist"}><ShareIcon/></Link>
                </SidebarLinks>
            </SidebarItems>
        </SidebarStyle>
    );
}

export default Sidebar;
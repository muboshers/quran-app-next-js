import React from 'react';
import {SidebarBottomStyle} from "@/src/components/sidebar-bottom/sidebar-bottom.styles";
import Link from "next/link";
import {HomeIcons} from "@/src/icons/home.icons";
import {ArabicBookIcon, BookmarkIcon, ShareIcon, UserIconIcon} from "@/src/icons";

function SidebarBottom() {
    return (
        <SidebarBottomStyle>
            <Link href={"/"}><HomeIcons /></Link>
            <Link href={"/all-books"}><ArabicBookIcon /></Link>
            <Link href={"/login"} className="user-icon"><UserIconIcon /></Link>
            <Link href={"/whishlist"}><BookmarkIcon /></Link>
            <Link href={"/whishlist"}><ShareIcon/></Link>
        </SidebarBottomStyle>
    );
}

export default SidebarBottom;
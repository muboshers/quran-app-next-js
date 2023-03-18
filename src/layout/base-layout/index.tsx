import React from "react";
import {BaseLayoutMainStyle, BaseLayoutMain, BaseLayoutStyles, BaseLayoutMainChildren} from "./base-layout.styles";
import Sidebar from "@/src/components/sidebar";
import Navbar from "@/src/components/navbar";
import UserSidebar from "@/src/components/user-sidebar";
import SidebarBottom from "@/src/components/sidebar-bottom";

interface BaseLayoutProps {
    readonly children: React.ReactNode;
}

export function BaseLayout({children}: BaseLayoutProps) {
    return (
        <BaseLayoutStyles>
            <Sidebar/>
            <SidebarBottom />
            <BaseLayoutMainStyle>
                <Navbar/>
                <BaseLayoutMain>
                    <BaseLayoutMainChildren>
                        {children}
                    </BaseLayoutMainChildren>
                    <UserSidebar />
                </BaseLayoutMain>
            </BaseLayoutMainStyle>
        </BaseLayoutStyles>
    );
}

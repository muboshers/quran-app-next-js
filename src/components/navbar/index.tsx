import React from 'react';
import {NavbarLogo, NavbarStyle, Buttons, SearchAndSettings} from "@/src/components/navbar/navbar.styles";
import {Button, Typography} from "@/src/components";
import SearchBox from "@/src/components/navbar/components/search-box";
import Link from "next/link";
import {SettingsIcon} from "@/src/icons";

function Navbar() {
    return (
        <NavbarStyle>
            <NavbarLogo>
                <Typography textSize={"h3"} textWeight={"w_700"} tag={"h3"} color={"text"}>Quran</Typography>
            </NavbarLogo>
            <SearchAndSettings>
                <SearchBox />
                <Link href="/settings"><SettingsIcon /></Link>
            </SearchAndSettings>
            <Buttons>
                <Button color={"lightText"} hover={"primary"} textWeight={"w_600"} background={"primary"} borderRadius={"border_10"} align={"center"} padding={"padding_15_30"}>Log In</Button>
                <Button color={"lightText"} hover={"primary"} textWeight={"w_600"} background={"primary"} borderRadius={"border_10"} align={"center"} padding={"padding_15_30"}>Sign Up</Button>
            </Buttons>
        </NavbarStyle>
    );
}

export default Navbar;
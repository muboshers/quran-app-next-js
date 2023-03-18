import React from "react";
import { Button, Typography } from "@/src/components";
import { NavbarLogo, NavbarStyle, Buttons } from "./navbar.styles";
import { SearchBox } from "./components/search-box";

export function Navbar() {
  return (
    <NavbarStyle>
      <NavbarLogo>
        <Typography
          textSize={"h3"}
          textWeight={"w_700"}
          tag={"h3"}
          color={"text"}
        >
          Quran
        </Typography>
      </NavbarLogo>
      <SearchBox />
      <Buttons>
        <Button
          color={"lightText"}
          hover={"primary"}
          textWeight={"w_600"}
          background={"primary"}
          borderRadius={"border_10"}
          align={"center"}
          padding={"padding_15_30"}
        >
          Log In
        </Button>
        <Button
          color={"lightText"}
          hover={"primary"}
          textWeight={"w_600"}
          background={"primary"}
          borderRadius={"border_10"}
          align={"center"}
          padding={"padding_15_30"}
        >
          Sign Up
        </Button>
      </Buttons>
    </NavbarStyle>
  );
}

import {ButtonMain} from "./button.style";
import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  readonly textWeight?: "w_800" | "w_700" | "w_600" | "w_500" | "w_400";
  readonly color:
    | "primary"
    | "secondary"
    | "secondaryOrange"
    | "backgroundGradient"
    | "text"
    | "secondText"
    | "lightText"
    | "darkBackground"
    | "hover"
    | "disabled"
    | "lightGray"
    | "alert";
  readonly background:
    | "simpleTextBackground"
    | "lighterBackground"
    | "lightBackground"
    | "cardLaidButton"
    | "grayBackground"
    | "backgroundGrayDark"
    | "iconBackground"
    | "primary"
    | "secondary"
    | "secondaryOrange"
    | "backgroundGradient"
    | "text"
    | "secondText"
    | "lightText"
    | "darkBackground"
    | "hover"
    | "disabled"
    | "lightGray"
    | "alert"
    | "facebookButton"
    | "transparent";
  readonly width?: string;
  readonly borderRadius: "border_10" | "border_50" | "none";
  readonly align: "start" | "center" | "last";
  readonly border?: "border_white" | "border_blue" | "none";
  readonly size?: "normal";
  readonly children: React.ReactNode;
  readonly padding: "padding_10" | "padding_15_30" | "none";
  readonly shadow?: "shadow" | "dramatic" | "lightDropShadow" | "textShadow";
}

export const Button = ({children, ...props}: ButtonProps) => (
  <ButtonMain {...props}>{children}</ButtonMain>
);

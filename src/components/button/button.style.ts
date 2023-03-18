import styled, {css} from "styled-components";
import {colors, shadows} from "../../config/theme";
import {weight} from "../typography/typography.style";
import React from "react";

interface ButtonMainProps {
    readonly textWeight?: "w_800" | "w_700" | "w_600" | "w_500" | "w_400";
    readonly color:
        | "primary"
        | "primaryOpacity"
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
        | "primaryOpacity"
        | "lighterBackground"
        | "lightBackground"
        | "cardLaidButton"
        | "grayBackground"
        | "backgroundGrayDark"
        | "iconBackground"
        | "primary"
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
    readonly hover:
        | "primary"
        | "opacity"
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

const borderRadius = {
    none: css`
      border-radius: 0;
    `,
    border_10: css`
      border-radius: 20px;
      border: none;
    `,
    border_50: css`
      border-radius: 50%;
      border: none;
    `,
};

const align = {
    start: css`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
      cursor: pointer;
    `,
    center: css`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      cursor: pointer;
    `,
    last: css`
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 10px;
      cursor: pointer;
    `,
};

const padding = {
    none: css`
      padding: 0;
    `,
    padding_10: css`
      padding: 10px;
    `,
    padding_15_30: css`
      padding: 12px 30px;
    `,
};

const border = {
    none: css`
      border: none;
    `,
    border_white: css`
      border: 1px solid #fff;
    `,
    border_blue: css`
      border: 1px solid var(--primary-color);
    `,
};

const size = {
    normal: css`
      font-size: 16px;
      line-height: 24px;
    `,
};

const hover = {
    primary: css`
      background: rgba(0, 172, 106, 0.11);
      color: #00AC6A;
    `,

    opacity: css`
      background: #00AC6A;
      color: #ffffff;
    `,

    transparent: css`
      background: transparent;
      color: #00AC6A;
    `
}

const background = {
    ...colors,
    primary: "#00AC6A",
    simpleTextBackground: "#ffffff",
    lighterBackground: "rgba(0, 0, 0, 0.1)",
    lightBackground: "rgba(0, 0, 0, 0.2)",
    cardLaidButton: "rgba(232, 232, 232, 0.46)",
    grayBackground: "rgba(176, 176, 176, 0.46)",
    backgroundGrayDark: "#E8E8E8",
    iconBackground: "#E9E9E9",
    transparent: "transparent",
    facebookButton: "#3950C5",
};

export const ButtonMain = styled.button<ButtonMainProps>`
  color: ${(props) => colors[props.color]};
  ${(props) => borderRadius[props.borderRadius]};
  ${(props) => align[props.align]}
  ${(props) => props.border && border[props.border]}
  ${(props) => props.size && size[props.size]}
  ${(props) => padding[props.padding]}
  font-weight: ${(props) => props.textWeight && weight[props.textWeight]};
  background: ${(props) => background[props.background]};
  width: ${(props) => props.width};
  box-shadow: ${(props) => props.shadow && shadows[props.shadow]};
  transition: 0.3s ease;

  &:hover {
    ${(props) => hover[props.hover]};
  }
`;

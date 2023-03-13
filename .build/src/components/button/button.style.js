"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var button_style_exports = {};
__export(button_style_exports, {
  ButtonMain: () => ButtonMain
});
module.exports = __toCommonJS(button_style_exports);
var import_styled_components = __toESM(require("styled-components"));
var import_theme = require("../../config/theme");
var import_typography = require("../typography/typography.style");
const borderRadius = {
  none: import_styled_components.css`
    border-radius: 0;
  `,
  border_10: import_styled_components.css`
    border-radius: 10px;
    border: none;
  `,
  border_50: import_styled_components.css`
    border-radius: 50%;
    border: none;
  `
};
const align = {
  start: import_styled_components.css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    cursor: pointer;
  `,
  center: import_styled_components.css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
  `,
  last: import_styled_components.css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    cursor: pointer;
  `
};
const padding = {
  none: import_styled_components.css`
    padding: 0;
  `,
  padding_10: import_styled_components.css`
    padding: 10px;
  `,
  padding_15_30: import_styled_components.css`
    padding: 15px 30px;
  `
};
const border = {
  none: import_styled_components.css`
    border: none;
  `,
  border_white: import_styled_components.css`
    border: 1px solid #fff;
  `,
  border_blue: import_styled_components.css`
    border: 1px solid #2091f9;
  `
};
const size = {
  normal: import_styled_components.css`
    font-size: 16px;
    line-height: 24px;
  `
};
const background = {
  ...import_theme.colors,
  primary: "#2091F9",
  simpleTextBackground: "#ffffff",
  lighterBackground: "rgba(0, 0, 0, 0.1)",
  lightBackground: "rgba(0, 0, 0, 0.2)",
  cardLaidButton: "rgba(232, 232, 232, 0.46)",
  grayBackground: "rgba(176, 176, 176, 0.46)",
  backgroundGrayDark: "#E8E8E8",
  iconBackground: "#E9E9E9",
  transparent: "transparent",
  facebookButton: "#3950C5"
};
const ButtonMain = import_styled_components.default.button`
  color: ${(props) => import_theme.colors[props.color]};
  ${(props) => borderRadius[props.borderRadius]};
  ${(props) => align[props.align]}
  ${(props) => props.border && border[props.border]}
  ${(props) => props.size && size[props.size]}
  ${(props) => padding[props.padding]}
  font-weight: ${(props) => props.textWeight && import_typography.weight[props.textWeight]};
  background: ${(props) => background[props.background]};
  width: ${(props) => props.width};
  box-shadow: ${(props) => props.shadow && import_theme.shadows[props.shadow]};
`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ButtonMain
});
//# sourceMappingURL=button.style.js.map

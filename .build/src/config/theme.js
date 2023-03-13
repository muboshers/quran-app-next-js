"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var theme_exports = {};
__export(theme_exports, {
  colors: () => colors,
  shadows: () => shadows
});
module.exports = __toCommonJS(theme_exports);
const colors = {
  primary: "#2091F9",
  secondary: "#2DC071",
  secondaryOrange: "#E77C40",
  backgroundGradient: "linear-gradient(39.97deg, #00F3B9 0.79%, #2187FF 79.29%)",
  text: "#252B42",
  secondText: "#737373",
  lightText: "#FFFFFF",
  darkBackground: "#252B42",
  hover: "#2A7CC7",
  disabled: "#8EC2F2",
  lightGray: "#BDBDBD",
  alert: "#E74040"
};
const shadows = {
  shadow: "0px 13px 19px rgba(0, 0, 0, 0.07)",
  dramatic: "-31px -22px 19px rgba(0, 0, 0, 0.3)",
  lightDropShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  textShadow: "0px 13px 19px rgba(0, 0, 0, 0.24)"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  colors,
  shadows
});
//# sourceMappingURL=theme.js.map

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
var typography_style_exports = {};
__export(typography_style_exports, {
  Text: () => Text,
  weight: () => weight
});
module.exports = __toCommonJS(typography_style_exports);
var import_styled_components = __toESM(require("styled-components"));
var import_theme = require("../../config/theme");
const size = {
  h1: import_styled_components.css`
    font-size: 58px;
    line-height: 80px;
    letter-spacing: 0.2px;
  `,
  h2: import_styled_components.css`
    font-size: 40px;
    line-height: 57px;
    letter-spacing: 0.2px;
  `,
  h3: import_styled_components.css`
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.1px;
  `,
  h4: import_styled_components.css`
    font-size: 24px;
    line-height: 38px;
    letter-spacing: 0.2px;
  `,
  h5: import_styled_components.css`
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;
  `,
  h6: import_styled_components.css`
    font-size: 14px;
    line-height: 28px;
    letter-spacing: 0.2px;
  `,
  button: import_styled_components.css`
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.2px;
  `,
  paragraphe: import_styled_components.css`
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.2px;
  `,
  link: import_styled_components.css`
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.2px;
  `,
  mobileMenu: import_styled_components.css`
    font-size: 30px;
    line-height: 45px;
    letter-spacing: 0.2px;
  `,
  list: import_styled_components.css`
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.2px;
  `
};
const weight = {
  w_800: 800,
  w_700: 700,
  w_600: 600,
  w_500: 500,
  w_400: 400
};
const Text = import_styled_components.default.p`
  color: ${(props) => import_theme.colors[props.color]};
  ${(props) => size[props.textSize]};
  font-weight: ${(props) => weight[props.textWeight]};

  @media (max-width: 1399px) {
    ${(props) => {
  var _a, _b;
  return ((_a = props.responsive) == null ? void 0 : _a.xxl) && size[(_b = props.responsive) == null ? void 0 : _b.xxl];
}};
  }
  @media (max-width: 1200px) {
    ${(props) => {
  var _a, _b;
  return ((_a = props.responsive) == null ? void 0 : _a.xl) && size[(_b = props.responsive) == null ? void 0 : _b.xl];
}};
  }
  @media (max-width: 992px) {
    ${(props) => {
  var _a, _b;
  return ((_a = props.responsive) == null ? void 0 : _a.md) && size[(_b = props.responsive) == null ? void 0 : _b.md];
}};
  }
  @media (max-width: 992px) {
    ${(props) => {
  var _a, _b;
  return ((_a = props.responsive) == null ? void 0 : _a.sm) && size[(_b = props.responsive) == null ? void 0 : _b.sm];
}};
  }
  @media (max-width: 992px) {
    ${(props) => {
  var _a, _b;
  return ((_a = props.responsive) == null ? void 0 : _a.xs) && size[(_b = props.responsive) == null ? void 0 : _b.xs];
}};
  }
`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Text,
  weight
});
//# sourceMappingURL=typography.style.js.map

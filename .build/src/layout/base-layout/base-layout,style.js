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
var base_layout_style_exports = {};
__export(base_layout_style_exports, {
  BaseLayoutMain: () => BaseLayoutMain,
  BaseLayoutStyle: () => BaseLayoutStyle
});
module.exports = __toCommonJS(base_layout_style_exports);
var import_styled_components = __toESM(require("styled-components"));
const BaseLayoutStyle = import_styled_components.default.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;
const BaseLayoutMain = import_styled_components.default.main`
  flex-grow: 1;
`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BaseLayoutMain,
  BaseLayoutStyle
});
//# sourceMappingURL=base-layout,style.js.map

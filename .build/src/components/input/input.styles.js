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
var input_styles_exports = {};
__export(input_styles_exports, {
  IconStyles: () => IconStyles,
  InputBox: () => InputBox,
  InputElement: () => InputElement,
  LabelStyles: () => LabelStyles
});
module.exports = __toCommonJS(input_styles_exports);
var import_styled_components = __toESM(require("styled-components"));
const InputBox = import_styled_components.default.div`
  position: relative;
  ${({ type }) => {
  if (type === "checkbox" || type === "radio") {
    return `
      display:flex;
      align-items:center;
      gap:15px;
      justify-content:start;
      flex-direction:row-reverse;
    `;
  }
}}
`;
const LabelStyles = import_styled_components.default.label`
  margin-bottom: 5px;
  font-size: 16px;
  line-height: 24px;
  display: block;
  ${({ type }) => {
  if (type === "checkbox" || type === "radio") {
    return `
      font-size: 14px;
      line-height: 28px;  
      font-weight:600;
      color: #737373;
      margin-bottom: 0;
      letter-spacing: 0.2px;
      cursor: pointer;
      `;
  }
}}
`;
const InputElement = import_styled_components.default.input`
  width: 100%;
  background: #ffffff;
  border: 2px solid #e8e8e8;
  border-radius: 10px;
  outline: none;
  padding: 21px 25px;
  font-size: 15px;
  line-height: 16px;

  ${({ icon, iconPosition }) => {
  if (icon && iconPosition === "left") {
    return `
        padding:21px 25px 21px 35px;
      `;
  } else if (icon && iconPosition === "right") {
    return `
        padding: 21px 35px 21px 25px;
      `;
  }
}}

  &:focus {
    border: 2px solid #2091f9;
  }

  ${({ type }) => {
  if (type === "checkbox") {
    return `
        width:20px;
        height:20px;
        padding:0;
        cursor:pointer;
      `;
  }
  if (type === "radio") {
    return `
        width:20px;
        height:20px;
        padding:0;
        cursor:pointer;
        appearance: none;
        border-radius:50%;
        &:checked {
          background: #fff;
          border: 4px solid #2091f9;
          border-radius:50%;

        }
        &:hover{
          border:4px solid #2091f9;
          background:color:#fff;  
        }
         &::after {
            border: 4px solid #2091f9;
            background-color:#2091f9;
          }
      `;
  }
}}
`;
const IconStyles = import_styled_components.default.span`
  display: flex;
  align-items: center;
  position: absolute;
  top: 69%;
  right: 10px;
  transform: translate(0, -69%);
  cursor: pointer;
  ${({ iconPosition }) => {
  if (iconPosition === "left") {
    return `
      right:auto;
      left: 10px;
      transform: translate(0, -69%);
    `;
  }
}}
  ${({ label, iconPosition }) => {
  if (!label && iconPosition === "right") {
    return `
      display:flex;
      align-items:center;
      position:absolute;
      top:50%;
      right:10px;
      transform:translate(0,-50%);
    `;
  } else if (!label && iconPosition === "left") {
    return `
        top:50%;
        left:10px;
        transform:translate(0,-50%)`;
  }
}};
`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IconStyles,
  InputBox,
  InputElement,
  LabelStyles
});
//# sourceMappingURL=input.styles.js.map

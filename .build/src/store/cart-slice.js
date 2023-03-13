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
var cart_slice_exports = {};
__export(cart_slice_exports, {
  addToCart: () => addToCart,
  cartSlice: () => cartSlice,
  default: () => cart_slice_default
});
module.exports = __toCommonJS(cart_slice_exports);
var import_toolkit = require("@reduxjs/toolkit");
const initialState = {
  cart: []
};
const cartSlice = (0, import_toolkit.createSlice)({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state) => {
      console.log("Hello world");
    }
  }
});
const { addToCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
var cart_slice_default = cartReducer;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addToCart,
  cartSlice
});
//# sourceMappingURL=cart-slice.js.map

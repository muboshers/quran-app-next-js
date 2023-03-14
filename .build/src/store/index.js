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
var store_exports = {};
__export(store_exports, {
  store: () => store
});
module.exports = __toCommonJS(store_exports);
var import_toolkit = require("@reduxjs/toolkit");
var import_api = require("../api");
var import_query = require("@reduxjs/toolkit/query");
var import_cart_slice = __toESM(require("./cart-slice"));
const store = (0, import_toolkit.configureStore)({
  reducer: {
    [import_api.baseApi.reducerPath]: import_api.baseApi.reducer,
    cart: import_cart_slice.default
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(
    import_api.baseApi.middleware
  ),
  devTools: true
});
(0, import_query.setupListeners)(store.dispatch);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  store
});
//# sourceMappingURL=index.js.map

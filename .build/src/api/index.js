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
var api_exports = {};
__export(api_exports, {
  baseApi: () => baseApi
});
module.exports = __toCommonJS(api_exports);
var import_react = require("@reduxjs/toolkit/query/react");
const baseApi = (0, import_react.createApi)({
  reducerPath: "baseApi",
  baseQuery: (0, import_react.fetchBaseQuery)({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${process.env.NEXT_PUBLIC_VIEWER_TOKEN}`
      );
      return headers;
    }
  }),
  endpoints: () => ({})
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  baseApi
});
//# sourceMappingURL=index.js.map

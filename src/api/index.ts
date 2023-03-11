import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${process.env.NEXT_PUBLIC_VIEWER_TOKEN}`
      );
      return headers;
    },
  }),
  endpoints: () => ({}),
});

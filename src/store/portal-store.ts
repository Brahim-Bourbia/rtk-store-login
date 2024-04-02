import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const portalApi = createApi({
  reducerPath: "portal-api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getListProduct: builder.query({
      query: ({ limit }) => `posts/?_limit=${limit}`, // expects a JSON response
    }),
    getProduct: builder.query({
      query: ({ postId: id }) => `posts/${id}`, // expects a JSON response
    }),
  }),
});

export const { useLazyGetProductQuery, useLazyGetListProductQuery } = portalApi;

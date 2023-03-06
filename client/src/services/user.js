import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:5001/user/';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getUserList: builder.query({
      query: () => 'users',
    }),
  }),
});

export const { useGetUserListQuery } = userApi;

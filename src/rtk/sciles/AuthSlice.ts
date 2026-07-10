import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiUrls from '../../assets/ts/apiLinks'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: apiUrls.auth }),
    endpoints: (builder) => ({
        getAuthMe: builder.query({
            query: () => `/me`,
        }),
        forgotPassword: builder.mutation({
            query: (newCategory) => ({
                url: `/forgot-password`,
                method: 'POST',
                body: newCategory,
            }),
        }),
        // postCategory: builder.mutation<CreateCategoryResponse, CreateCategoryRequest>({
        //     query: (newCategory: CreateCategoryRequest) => ({
        //         url: ``,
        //         method: 'POST',
        //         body: newCategory,
        //     }),
        // }),
    }),
})

export const {  } = authApi
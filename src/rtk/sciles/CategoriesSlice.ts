import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Category } from '../../types/dbtypes'
import apiUrls from '../../assets/ts/apiLinks'

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrls.categories }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => ``,
    }),
    getCategoryById: builder.query<Category, string>({
      query: (id) => `${id}`,
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `${id}`,
        method: 'DELETE',
      }),
    }),
    postCategory: builder.mutation<Category, {name: string; parentId?: string}>({
      query: (newCategory) => ({
        url: ``,
        method: 'POST',
        body: newCategory,
      }),
    }),
    putCategory: builder.mutation<Category, { id: string; putBody: { name?: string; parentId?: string } }>({
      query: ({ id, putBody }) => ({
        url: `${id}`,
        method: 'PUT',
        body: putBody,
      }),
    }),
  }),
})

export const { useGetCategoriesQuery, useGetCategoryByIdQuery, useDeleteCategoryMutation, usePostCategoryMutation, usePutCategoryMutation } = categoriesApi
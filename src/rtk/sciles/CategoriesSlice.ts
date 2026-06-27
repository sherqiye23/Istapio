import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiUrls from '../../assets/ts/apiLinks'
import type { CreateCategoryRequest, CreateCategoryResponse, GetCategoryDto, UpdateCategoryRequest, UpdateCategoryResponse } from '../../types/category.types';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrls.categories }),
  endpoints: (builder) => ({
    getCategories: builder.query<GetCategoryDto[], void>({
      query: () => ``,
    }),
    getCategoryById: builder.query<GetCategoryDto, string>({
      query: (id) => `${id}`,
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `${id}`,
        method: 'DELETE',
      }),
    }),
    postCategory: builder.mutation<CreateCategoryResponse, CreateCategoryRequest>({
      query: (newCategory: CreateCategoryRequest) => ({
        url: ``,
        method: 'POST',
        body: newCategory,
      }),
    }),
    putCategory: builder.mutation<UpdateCategoryResponse, UpdateCategoryRequest>({
      query: (body: UpdateCategoryRequest) => ({
        url: `${body.id}`,
        method: 'PUT',
        body
      }),
    }),
  }),
})

export const { useGetCategoriesQuery, useGetCategoryByIdQuery, useDeleteCategoryMutation, usePostCategoryMutation, usePutCategoryMutation } = categoriesApi
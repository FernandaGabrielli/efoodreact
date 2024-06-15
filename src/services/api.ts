import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../pages/Home'
import { Restaurante } from '../pages/Categories'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurant: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getBanner: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetRestaurantQuery,
  useGetBannerQuery
} = api

export default api

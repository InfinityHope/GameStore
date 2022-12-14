import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct, IProductsData } from '../../../models/product.models'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    endpoints: (build) => ({
        getAllProducts: build.query<IProductsData<IProduct>, number>({
            query: (limit = 8) => ({
                url: `/product?${limit && `limit=${limit}`}`,
            }),
        }),
        getSliderProducts: build.query<IProduct[], null>({
            query: () => ({
                url: `/product/toSlider`,
            }),
        }),
        getProductsBySales: build.query<IProduct[], number>({
            query: (limit = 8) => ({
                url: `/product/bySales?${limit && `limit=${limit}`}`,
            }),
        }),
        getProductsByReleaseDate: build.query<IProduct[], number>({
            query: (limit = 8) => ({
                url: `/product/byReleaseDate?${limit && `limit=${limit}`}`,
            }),
        }),
        getProduct: build.query<IProduct, string | null>({
            query: (id = null) => ({
                url: `/product/${id}`,
            }),
        }),
    }),
})

export const {
    useGetAllProductsQuery,
    useGetProductQuery,
    useGetSliderProductsQuery,
    useGetProductsByReleaseDateQuery,
    useGetProductsBySalesQuery,
} = productsApi

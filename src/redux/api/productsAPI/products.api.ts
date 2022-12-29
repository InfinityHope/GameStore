import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct, IProductsData } from '@/models/product.models'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    endpoints: (build) => ({
        getAllProducts: build.query<
            IProductsData<IProduct>,
            {
                limit?: number
                search?: string
                sort?: string
                genres?: string
                developers?: string
                publishers?: string
                page?: number
            }
        >({
            query: ({
                limit = 8,
                search = '',
                page = 1,
                genres = '',
                developers = '',
                publishers = '',
                sort = '',
            }) => ({
                url: `/product?page=${page}${limit && `&limit=${limit}`}${
                    search && `&search=${search}`
                }${genres && `&genre=${genres}`}${developers && `&developer=${developers}`}${
                    publishers && `&publisher=${publishers}`
                }${sort && `&sort=${sort}`}`,
            }),
        }),
        getSliderProducts: build.query<IProduct[], null>({
            query: () => ({
                url: `/product/toSlider`,
            }),
        }),
        getProductsBySales: build.query<IProduct[], number>({
            query: (limit = 8) => ({
                url: `/product/bySales?limit=${limit}`,
            }),
        }),
        getProductsByReleaseDate: build.query<IProduct[], number>({
            query: (limit = 8) => ({
                url: `/product/byReleaseDate?limit=${limit}`,
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

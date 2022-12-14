import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICartItem } from '../../../models/cart.models'

export const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    endpoints: (build) => ({
        createOrder: build.mutation<null, { cartItems: ICartItem[]; userId: string }>({
            query: ({ cartItems, userId }) => ({
                url: '/order/create',
                method: 'POST',
                body: { cartItems, userId },
                headers: {
                    Authorization:
                        'Bearer ' + JSON.parse(localStorage.getItem('auth') || '{}').token,
                },
            }),
        }),
    }),
})

export const { useCreateOrderMutation } = orderApi

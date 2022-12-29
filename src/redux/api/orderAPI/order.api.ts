import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICartItem } from '@/models/cart.models'
import { RootState } from '@/redux/store'

export const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            const { token } = (getState() as RootState).auth.authData
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (build) => ({
        createOrder: build.mutation<null, { cartItems: ICartItem[]; userId: string }>({
            query: ({ cartItems, userId }) => ({
                url: '/order/create',
                method: 'POST',
                body: { cartItems, userId },
            }),
        }),
    }),
})

export const { useCreateOrderMutation } = orderApi

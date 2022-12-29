import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUpdateUser, IUser } from '@/models/user.models'
import { RootState } from '@/redux/store'
import { ILibraryItem } from '@/models/library.models'
import { IOrder } from '@/models/order.models'

export const userApi = createApi({
    reducerPath: 'userApi',
    tagTypes: ['User'],
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
        getUserData: build.query<IUser, string>({
            query: (_id) => ({
                url: `/user/${_id}`,
            }),
            providesTags: ['User'],
        }),
        updateUserData: build.mutation<IUser, IUpdateUser>({
            query: ({ _id, data }) => ({
                url: `/user/${_id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['User'],
        }),
        getUserLibrary: build.query<ILibraryItem[], string>({
            query: (_id) => ({
                url: `/user/library/${_id}`,
            }),
            providesTags: ['User'],
        }),
        getUserOrders: build.query<IOrder[], string>({
            query: (_id) => ({
                url: `/order/${_id}`,
            }),
            providesTags: ['User'],
        }),
    }),
})

export const {
    useGetUserDataQuery,
    useUpdateUserDataMutation,
    useGetUserLibraryQuery,
    useGetUserOrdersQuery,
} = userApi

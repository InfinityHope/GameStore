import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../../../models/user.models'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    endpoints: (build) => ({
        getUserData: build.query<IUser, string>({
            query: (_id) => ({
                url: `user/${_id}`,
            }),
        }),
    }),
})

export const { useGetUserDataQuery } = userApi

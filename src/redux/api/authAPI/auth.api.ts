import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IAuth } from '@/models/auth.models'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    endpoints: (build) => ({
        loginUser: build.mutation<IAuth, Record<string, string>>({
            query: ({ email, password }) => ({
                url: '/auth/login',
                method: 'POST',
                body: { email, password },
            }),
        }),
        registerUser: build.mutation<IAuth, Record<string, string>>({
            query: ({ email, password, firstName, nickName }) => ({
                url: '/auth/register',
                method: 'POST',
                body: { email, password, firstName, nickName },
            }),
        }),
    }),
})

export const { useLoginUserMutation, useRegisterUserMutation } = authApi

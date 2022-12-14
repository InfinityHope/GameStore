//Библиотеки
import { createAsyncThunk } from '@reduxjs/toolkit'
//Типы
import { IAuth } from '../../../models/auth.models'
import axiosInstance from '../../../axios/axios'

export const loginUser = createAsyncThunk<IAuth, Record<string, string>>(
    'auth/loginUser',
    async ({ email, password }) => {
        const res = await axiosInstance.post<IAuth>('auth/login', {
            email,
            password,
        })

        return res.data
    }
)

export const registerUser = createAsyncThunk<IAuth, Record<string, string>>(
    'auth/registerUser',
    async ({ email, password, firstName, nickName }) => {
        const res = await axiosInstance.post<IAuth>('auth/register', {
            email,
            password,
            firstName,
            nickName,
        })
        return res.data
    }
)

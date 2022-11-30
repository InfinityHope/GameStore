//Библиотеки
import { createAsyncThunk } from '@reduxjs/toolkit'
//Типы
import { IAuthData } from '../../models/IAuthData'
import axiosInstance from '../../../axios/axios'

export const loginUser = createAsyncThunk<IAuthData, Record<string, string>>(
    'auth/loginUser',
    async ({ email, password }) => {
        const res = await axiosInstance.post<IAuthData>('auth/login', {
            email,
            password,
        })
        return res.data
    }
)

export const registerUser = createAsyncThunk<IAuthData, Record<string, string>>(
    'auth/registerUser',
    async ({ email, password, firstName, nickName }) => {
        const res = await axiosInstance.post<IAuthData>('auth/register', {
            email,
            password,
            firstName,
            nickName,
        })
        return res.data
    }
)

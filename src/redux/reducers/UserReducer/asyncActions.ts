import { createAsyncThunk } from '@reduxjs/toolkit'
import { IUpdateUser, IUser } from '../../models/IUser'
import { ILibraryGame } from '../../models/ILibraryGame'
import { IOrder } from '../../models/IOrder'
import axiosInstance from '../../../axios/axios'

export const fetchUserData = createAsyncThunk<IUser, Record<string, string>>(
    'user/fetchUserData',
    async ({ _id, token }) => {
        const res = await axiosInstance.get(`user/${_id}`)
        return res.data
    }
)

export const updateUserData = createAsyncThunk<string, IUpdateUser>(
    'user/updateUserData',
    async ({ _id, token, data }) => {
        const res = await axiosInstance.patch(`user/${_id}`, data)
        return res.data
    }
)

export const getUserLibrary = createAsyncThunk<
    ILibraryGame[],
    Record<string, string>
>('user/getUserLibrary', async ({ _id, token }) => {
    const res = await axiosInstance.get<ILibraryGame[]>(`user/library/${_id}`)
    return res.data
})

export const getUserOrders = createAsyncThunk<IOrder, Record<string, string>>(
    'user/getUserOrders',
    async ({ _id, token }) => {
        const res = await axiosInstance.get<IOrder>(`order/${_id}`)
        return res.data
    }
)

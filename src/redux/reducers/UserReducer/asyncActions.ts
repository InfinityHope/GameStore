import { createAsyncThunk } from '@reduxjs/toolkit'
import { IUpdateUser, IUser } from '../../../models/user.models'
import axiosInstance from '../../../axios/axios'
import { ILibraryItem } from '../../../models/library.models'
import { IOrder } from '../../../models/order.models'

export const getUserData = createAsyncThunk<IUser, string>('user/fetchUserData', async (_id) => {
    const res = await axiosInstance.get<IUser>(`user/${_id}`)
    return res.data
})

export const updateUserData = createAsyncThunk<IUser, IUpdateUser>(
    'user/updateUserData',
    async ({ _id, data }) => {
        const res = await axiosInstance.patch(`user/${_id}`, data)
        return res.data
    }
)

export const getUserLibrary = createAsyncThunk<ILibraryItem[], string>(
    'user/getUserLibrary',
    async (_id) => {
        const res = await axiosInstance.get<ILibraryItem[]>(`user/library/${_id}`)
        return res.data
    }
)

export const getUserOrders = createAsyncThunk<IOrder, string>('user/getUserOrders', async (_id) => {
    const res = await axiosInstance.get<IOrder>(`order/${_id}`)
    return res.data
})

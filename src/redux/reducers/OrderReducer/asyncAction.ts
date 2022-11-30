import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../../axios/axios'

export const createOrder = createAsyncThunk('order/createOrder', async () => {
    const res = await axiosInstance.post('order/create')
    return res.data
})

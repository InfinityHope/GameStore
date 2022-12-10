import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../../axios/axios'
import { ICartItem } from '../../models/cart.models'

export const createOrder = createAsyncThunk<
    undefined,
    { cartItems: ICartItem[]; userId: string }
>('order/createOrder', async ({ cartItems, userId }) => {
    const res = await axiosInstance.post('order/create', {
        cartItems,
        userId,
    })
    return res.data
})

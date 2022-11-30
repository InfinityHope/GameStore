//Библиотеки
import { createAsyncThunk } from '@reduxjs/toolkit'
//Типы
import { IProduct, ProductsData } from '../../models/IProduct'
import axiosInstance from '../../../axios/axios'

export const fetchProducts = createAsyncThunk('products/fetchAll', async () => {
    const res = await axiosInstance.get<ProductsData>('product')
    return res.data
})

export const fetchProduct = createAsyncThunk<IProduct, string>(
    'products/fetchOne',
    async (_id: string) => {
        const res = await axiosInstance.get(`product/${_id}`)
        return res.data
    }
)

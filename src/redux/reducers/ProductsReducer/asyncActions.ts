//Библиотеки
import { createAsyncThunk } from '@reduxjs/toolkit'
//Типы
import { IProduct, IProductsData } from '../../models/product.models'
import axiosInstance from '../../../axios/axios'

export const fetchProducts = createAsyncThunk<
    IProductsData,
    Record<string, string | number>
>('products/fetchAll', async ({ limit, searchValue }) => {
    const res = await axiosInstance.get<IProductsData>(
        `product?limit=${limit}${searchValue ? `&search=${searchValue}` : ''}`
    )
    return res.data
})

export const fetchProduct = createAsyncThunk<IProduct, string>(
    'products/fetchOne',
    async (_id: string) => {
        const res = await axiosInstance.get<IProduct>(`product/${_id}`)
        return res.data
    }
)

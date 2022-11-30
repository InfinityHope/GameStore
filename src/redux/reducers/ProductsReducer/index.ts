//Библиотеки
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
//Типы
import { IProduct, ProductsData } from '../../models/IProduct'
//Асинхронные функции
import { fetchProduct, fetchProducts } from './asyncActions'

interface ProductState {
    products: IProduct[]
    product: IProduct
    pages: number
    page: number
    isLoading: boolean
    error: string
}

const initialState: ProductState = {
    products: [],
    product: {} as IProduct,
    pages: 0,
    page: 0,
    isLoading: false,
    error: '',
}

export const Product = createSlice({
    name: 'Product',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.fulfilled.type]: (
            state,
            action: PayloadAction<ProductsData>
        ) => {
            state.isLoading = false
            state.error = ''
            state.products = action.payload.products
            state.pages = action.payload.pages
            state.page = action.payload.page
        },
        [fetchProducts.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchProducts.rejected.type]: (
            state,
            action: PayloadAction<string>
        ) => {
            state.isLoading = false
            state.error = action.payload
        },
        [fetchProduct.fulfilled.type]: (
            state,
            action: PayloadAction<IProduct>
        ) => {
            state.isLoading = false
            state.error = ''
            state.product = action.payload
        },
        [fetchProduct.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchProduct.rejected.type]: (
            state,
            action: PayloadAction<string>
        ) => {
            state.isLoading = false
            state.error = action.payload
        },
    },
})

export default Product.reducer

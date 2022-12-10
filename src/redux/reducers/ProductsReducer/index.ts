//Библиотеки
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
//Типы
import { IProduct, IProductsData } from '../../models/product.models'
//Асинхронные функции
import { fetchProduct, fetchProducts } from './asyncActions'

interface ProductState {
    products: IProduct[]
    product: IProduct
    pages: number
    page: number
    isLoadingProducts: boolean
    error: string
}

const initialState: ProductState = {
    products: [],
    product: {} as IProduct,
    pages: 0,
    page: 0,
    isLoadingProducts: false,
    error: '',
}

export const Product = createSlice({
    name: 'Product',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.pending.type]: (state) => {
            state.isLoadingProducts = true
        },
        [fetchProducts.fulfilled.type]: (
            state,
            action: PayloadAction<IProductsData>
        ) => {
            state.isLoadingProducts = false
            state.products = action.payload.products.map((product) => {
                return {
                    ...product,
                    isAdded: false,
                }
            })
            state.pages = action.payload.pages
            state.page = action.payload.page
        },
        [fetchProducts.rejected.type]: (
            state,
            action: PayloadAction<string>
        ) => {
            state.isLoadingProducts = false
            state.error = action.payload
        },
        [fetchProduct.pending.type]: (state) => {
            state.isLoadingProducts = true
        },
        [fetchProduct.fulfilled.type]: (
            state,
            action: PayloadAction<IProduct>
        ) => {
            state.isLoadingProducts = false
            state.product = action.payload
        },
        [fetchProduct.rejected.type]: (
            state,
            action: PayloadAction<string>
        ) => {
            state.isLoadingProducts = false
            state.error = action.payload
        },
    },
})

export default Product.reducer

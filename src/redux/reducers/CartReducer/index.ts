import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartItem } from '../../models/cart.models'
import { createOrder } from './asyncActions'

interface ICartState {
    cartItems: ICartItem[]
    totalPrice: number
    error: string
    isLoadingCart: boolean
}

const initialState: ICartState = {
    cartItems: [],
    totalPrice: 0,
    error: '',
    isLoadingCart: false,
}

const Cart = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addCartItem: (state, action: PayloadAction<ICartItem>) => {
            const duplicate = state.cartItems.find(
                (item) => item.productId === action.payload.productId
            )

            if (duplicate) {
                state.cartItems = state.cartItems.filter(
                    (item) =>
                        item.productId !== action.payload.productId
                )
            } else {
                state.cartItems.push(action.payload)
                state.totalPrice += action.payload.price
            }
        },
        deleteCartItem: (state, action: PayloadAction<ICartItem>) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.productId !== action.payload.productId
            )
            state.totalPrice -= action.payload.price
        },
    },
    extraReducers: {
        [createOrder.pending.type]: (state) => {
            state.isLoadingCart = true
        },
        [createOrder.fulfilled.type]: (state) => {
            state.isLoadingCart = false
            state.cartItems = []
        },
        [createOrder.pending.type]: (
            state,
            action: PayloadAction<string>
        ) => {
            state.isLoadingCart = false
            state.error = action.payload
        },
    },
})

export const { addCartItem, deleteCartItem } = Cart.actions
export default Cart.reducer

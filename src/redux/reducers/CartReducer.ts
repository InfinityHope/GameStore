import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartItem } from '../../models/cart.models'

interface ICartState<T> {
    cartItems: T[]
    totalPrice: number
}

const initialState: ICartState<ICartItem> = {
    cartItems: [],
    totalPrice: 0,
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
                    (item) => item.productId !== action.payload.productId
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
        clearCart: (state) => {
            state.cartItems = []
            state.totalPrice = 0
        },
    },
})

export const cartActions = Cart.actions
export default Cart.reducer

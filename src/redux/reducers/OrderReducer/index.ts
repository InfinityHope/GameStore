import { createSlice } from '@reduxjs/toolkit'
import { createOrder } from './asyncAction'

const initialState = {
    loading: false,
    error: '',
}

const OrderSlice = createSlice({
    name: 'Order',
    initialState,
    reducers: {},
    extraReducers: {
        [createOrder.pending.type]: (state) => {},
    },
})

export const {} = OrderSlice.actions
export default OrderSlice.reducer

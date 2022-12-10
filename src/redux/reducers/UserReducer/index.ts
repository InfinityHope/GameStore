import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
    getUserData,
    getUserLibrary,
    getUserOrders,
    updateUserData,
} from './asyncActions'
import { IUser } from '../../models/user.models'
import { ILibraryItem } from '../../models/library.models'
import { IOrder } from '../../models/order.models'

interface IUserState {
    userData: IUser
    userLibrary: ILibraryItem[]
    userOrders: IOrder[]
    isLoadingUser: boolean
    error: string
}

const initialState: IUserState = {
    userData: {} as IUser,
    userLibrary: [],
    userOrders: [],
    isLoadingUser: false,
    error: '',
}

const User = createSlice({
    name: 'User',
    initialState,
    reducers: {},
    extraReducers: {
        [getUserData.pending.type]: (state) => {
            state.isLoadingUser = true
        },
        [getUserData.fulfilled.type]: (
            state,
            action: PayloadAction<IUser>
        ) => {
            state.isLoadingUser = false
            state.userData = action.payload
        },
        [getUserData.rejected.type]: (
            state,
            action: PayloadAction<string>
        ) => {
            state.isLoadingUser = false
            state.error = action.payload
        },
        [updateUserData.pending.type]: (state) => {
            state.isLoadingUser = true
        },
        [updateUserData.fulfilled.type]: (
            state,
            action: PayloadAction<IUser>
        ) => {
            state.isLoadingUser = false
            state.userData.email = action.payload.email
            state.userData.nickName = action.payload.nickName
            state.userData.firstName = action.payload.firstName
        },
        [updateUserData.rejected.type]: (
            state,
            action: PayloadAction<string>
        ) => {
            state.isLoadingUser = false
            state.error = action.payload
        },
        [getUserLibrary.pending.type]: (state) => {
            state.isLoadingUser = true
        },
        [getUserLibrary.fulfilled.type]: (
            state,
            action: PayloadAction<ILibraryItem[]>
        ) => {
            state.isLoadingUser = false
            state.userLibrary = action.payload
        },
        [getUserLibrary.rejected.type]: (
            state,
            action: PayloadAction<string>
        ) => {
            state.isLoadingUser = false
            state.error = action.payload
        },
        [getUserOrders.pending.type]: (state) => {
            state.isLoadingUser = true
        },
        [getUserOrders.fulfilled.type]: (
            state,
            action: PayloadAction<IOrder[]>
        ) => {
            state.isLoadingUser = false
            state.userOrders = action.payload
        },
        [getUserOrders.rejected.type]: (
            state,
            action: PayloadAction<string>
        ) => {
            state.isLoadingUser = false
            state.error = action.payload
        },
    },
})

export default User.reducer

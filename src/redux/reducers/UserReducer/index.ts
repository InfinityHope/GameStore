import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
    fetchUserData,
    getUserLibrary,
    getUserOrders,
    updateUserData,
} from './asyncActions'
import { IUser } from '../../models/IUser'
import { ILibraryGame } from '../../models/ILibraryGame'
import { IOrder } from '../../models/IOrder'

interface IUserState {
    userData: IUser
    userLibrary: ILibraryGame[]
    userOrders: IOrder[]
    isLoading: boolean
    error: string
}

const initialState: IUserState = {
    userData: {} as IUser,
    userLibrary: [],
    userOrders: [],
    isLoading: false,
    error: '',
}

const User = createSlice({
    name: 'User',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUserData.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchUserData.rejected.type]: (
            state,
            action: PayloadAction<string>
        ) => {
            state.isLoading = false
            state.error = action.payload
        },
        [fetchUserData.fulfilled.type]: (
            state,
            action: PayloadAction<IUser>
        ) => {
            state.userData = action.payload
            state.isLoading = false
        },
        [updateUserData.pending.type]: (state) => {
            state.isLoading = true
        },
        [updateUserData.rejected.type]: (
            state,
            action: PayloadAction<string>
        ) => {
            state.isLoading = false
            state.error = action.payload
        },
        [updateUserData.fulfilled.type]: (
            state,
            action: PayloadAction<IUser>
        ) => {
            state.userData.email = action.payload.email
            state.userData.nickName = action.payload.nickName
            state.userData.firstName = action.payload.firstName
            state.isLoading = false
        },
        [getUserLibrary.pending.type]: (state) => {
            state.isLoading = true
        },
        [getUserLibrary.rejected.type]: (
            state,
            action: PayloadAction<string>
        ) => {
            state.isLoading = false
            state.error = action.payload
        },
        [getUserLibrary.fulfilled.type]: (
            state,
            action: PayloadAction<ILibraryGame[]>
        ) => {
            state.isLoading = false
            state.userLibrary = action.payload
        },
        [getUserOrders.pending.type]: (state) => {
            state.isLoading = true
        },
        [getUserOrders.rejected.type]: (
            state,
            action: PayloadAction<string>
        ) => {
            state.isLoading = false
            state.error = action.payload
        },
        [getUserOrders.fulfilled.type]: (
            state,
            action: PayloadAction<IOrder[]>
        ) => {
            state.isLoading = false
            state.userOrders = action.payload
        },
    },
})

export default User.reducer

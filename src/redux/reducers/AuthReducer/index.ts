//Библиотеки
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
//Типы
import { IAuthData } from '../../models/IAuthData'
//Асинхронные функции
import { loginUser, registerUser } from './asyncActions'

interface AuthState {
    authData: IAuthData
    isLoading: boolean
    error: string
}

const initialState: AuthState = {
    authData: JSON.parse(localStorage.getItem('authData') || `{}`),
    isLoading: false,
    error: '',
}

export const Auth = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('authData')
            state.authData = {
                token: '',
                user: {
                    email: '',
                    _id: '',
                },
            }
        },
    },
    extraReducers: {
        [loginUser.pending.type]: (state) => {
            state.isLoading = true
        },
        [loginUser.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
        [loginUser.fulfilled.type]: (
            state,
            action: PayloadAction<IAuthData>
        ) => {
            state.authData = action.payload
            localStorage.setItem('authData', JSON.stringify(action.payload))
            state.isLoading = false
        },
        [registerUser.pending.type]: (state) => {
            state.isLoading = true
        },
        [registerUser.rejected.type]: (
            state,
            action: PayloadAction<string>
        ) => {
            state.isLoading = false
            state.error = action.payload
        },
        [registerUser.fulfilled.type]: (
            state,
            action: PayloadAction<IAuthData>
        ) => {
            state.authData = action.payload
            localStorage.setItem('authData', JSON.stringify(action.payload))
            state.isLoading = false
        },
    },
})

export const { logout } = Auth.actions
export default Auth.reducer

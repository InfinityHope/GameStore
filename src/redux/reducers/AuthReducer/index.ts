//Библиотеки
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
//Типы
import { IAuth } from '../../models/auth.models'
//Асинхронные функции
import { loginUser, registerUser } from './asyncActions'

interface AuthState {
    authData: IAuth
    isLoadingAuth: boolean
    authError: string
}

const initialState: AuthState = {
    authData: JSON.parse(localStorage.getItem('auth') || `{}`),
    isLoadingAuth: false,
    authError: '',
}

export const Auth = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('auth')
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
            state.isLoadingAuth = true
        },
        [loginUser.fulfilled.type]: (state, action: PayloadAction<IAuth>) => {
            state.isLoadingAuth = false
            state.authData = action.payload
            localStorage.setItem('auth', JSON.stringify(action.payload))
        },
        [loginUser.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoadingAuth = false
            state.authError = action.payload
        },
        [registerUser.pending.type]: (state) => {
            state.isLoadingAuth = true
        },
        [registerUser.fulfilled.type]: (state, action: PayloadAction<IAuth>) => {
            state.isLoadingAuth = false
            state.authData = action.payload
            localStorage.setItem('auth', JSON.stringify(action.payload))
        },
        [registerUser.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoadingAuth = false
            state.authError = action.payload
        },
    },
})

export const { logout } = Auth.actions
export default Auth.reducer

//Библиотеки
import { createSlice } from '@reduxjs/toolkit'
//Типы
import { IAuth } from '../../../models/auth.models'

//Асинхронные функции

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
})

export const authActions = Auth.actions
export default Auth.reducer

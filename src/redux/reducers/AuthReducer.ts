//Библиотеки
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
//Типы
import { IAuth } from '../../models/auth.models'

//Асинхронные функции

interface AuthState {
    authData: IAuth
}

const initialState: AuthState = {
    authData: JSON.parse(localStorage.getItem('auth') || `{}`),
}

export const Auth = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('auth')
            state.authData = {} as IAuth
        },
        setAuth: (state, action: PayloadAction<IAuth>) => {
            state.authData = action.payload
            localStorage.setItem('auth', JSON.stringify(action.payload))
        },
    },
})

export const authActions = Auth.actions
export default Auth.reducer

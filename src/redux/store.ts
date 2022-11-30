import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productReducer from './reducers/ProductsReducer'
import authReducer from './reducers/AuthReducer'
import userReducer from './reducers/UserReducer'
import orderReducer from './reducers/OrderReducer'

const rootReducer = combineReducers({
    products: productReducer,
    auth: authReducer,
    user: userReducer,
    order: orderReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

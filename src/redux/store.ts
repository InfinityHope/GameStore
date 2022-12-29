import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist'
import authReducer from './reducers/AuthReducer'
import cartReducer from './reducers/CartReducer'
import favouriteReducer from './reducers/FavouriteReducer'
import { productsApi } from './api/productsAPI/products.api'
import { orderApi } from './api/orderAPI/order.api'
import { authApi } from './api/authAPI/auth.api'
import { userApi } from './api/userAPI/user.api'

const rootPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'favourite'],
}

const rootReducer = combineReducers({
    [productsApi.reducerPath]: productsApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    auth: authReducer,
    cart: cartReducer,
    favourite: favouriteReducer,
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(
            productsApi.middleware,
            orderApi.middleware,
            authApi.middleware,
            userApi.middleware
        ),
})

const persister = persistStore(store)

export { store, persister }

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']

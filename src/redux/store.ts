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
import productReducer from './reducers/ProductsReducer'
import authReducer from './reducers/AuthReducer'
import userReducer from './reducers/UserReducer'
import cartReducer from './reducers/CartReducer'
import favouriteReducer from './reducers/FavouriteReducer'

const rootPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'favourite'],
}

const rootReducer = combineReducers({
    products: productReducer,
    auth: authReducer,
    user: userReducer,
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
        }),
})

const persister = persistStore(store)

export { store, persister }

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']

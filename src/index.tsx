//Библиотеки
import React from 'react'
import ReactDOM from 'react-dom/client'
import { persister, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
//Стили
import './index.scss'
//Компоненты
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'
import { router } from './router'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
            <RouterProvider router={router()} />
        </PersistGate>
    </Provider>
)

//Библиотеки
import React from 'react'
import ReactDOM from 'react-dom/client'
import { setupStore } from './redux/store'
//Стили
import './index.scss'
//Компоненты
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'
import { router } from './router'

const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <Provider store={store}>
        <RouterProvider router={router()} />
    </Provider>
)

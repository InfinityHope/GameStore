import { createBrowserRouter } from 'react-router-dom'
import {
    CatalogPage,
    HomePage,
    NewsPage,
    ProfilePage,
    SinglePage,
} from './pages'
import RequireAuth from './hoc/RequireAuth'
import { DataView, LibraryView, OrdersView } from './views'

export const router = () => {
    return createBrowserRouter([
        {
            path: '/',
            element: <HomePage />,
        },
        {
            path: '/catalog',
            element: <CatalogPage />,
        },
        {
            path: 'catalog/:id',
            element: <SinglePage />,
        },
        {
            path: '/news',
            element: <NewsPage />,
        },
        {
            path: '/profile',
            element: (
                <RequireAuth>
                    <ProfilePage />
                </RequireAuth>
            ),
            children: [
                {
                    path: 'data',
                    element: <DataView />,
                },
                {
                    path: 'orders',
                    element: <OrdersView />,
                },
                {
                    path: 'library',
                    element: <LibraryView />,
                },
            ],
        },
    ])
}

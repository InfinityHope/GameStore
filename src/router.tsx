import { createBrowserRouter } from 'react-router-dom'
import {
    CartPage,
    CatalogPage,
    FavouritePage,
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
            path: '/favourite',
            element: <FavouritePage />,
        },
        {
            path: '/cart',
            element: <CartPage />,
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

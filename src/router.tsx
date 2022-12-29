import { createBrowserRouter } from 'react-router-dom'
import {
    CartPage,
    CatalogPage,
    FavouritePage,
    HomePage,
    NewsPage,
    NotFoundPage,
    ProfilePage,
    SinglePage,
} from './pages'
import RequireAuth from '@/hoc/RequireAuth'
import LayoutMain from '@/layouts/LayoutMain'
import OrdersView from '@/pages/ProfilePage/OrdersView'
import LibraryView from '@/pages/ProfilePage/LibraryView'
import DataView from '@/pages/ProfilePage/DataView'
import { SearchPage } from '@/pages'

export const router = () => {
    return createBrowserRouter([
        {
            path: '/',
            element: (
                <LayoutMain>
                    <HomePage />
                </LayoutMain>
            ),
        },
        {
            path: '/catalog',
            element: (
                <LayoutMain>
                    <CatalogPage />
                </LayoutMain>
            ),
        },
        {
            path: 'catalog/:id',
            element: (
                <LayoutMain>
                    <SinglePage />
                </LayoutMain>
            ),
        },
        {
            path: '/news',
            element: (
                <LayoutMain>
                    <NewsPage />
                </LayoutMain>
            ),
        },
        {
            path: '/search',
            element: (
                <LayoutMain>
                    <SearchPage />
                </LayoutMain>
            ),
        },
        {
            path: '/favourite',
            element: (
                <LayoutMain>
                    <FavouritePage />
                </LayoutMain>
            ),
        },
        {
            path: '/cart',
            element: (
                <LayoutMain>
                    <CartPage />
                </LayoutMain>
            ),
        },
        {
            path: '/profile',
            element: (
                <LayoutMain>
                    <RequireAuth>
                        <ProfilePage />
                    </RequireAuth>
                </LayoutMain>
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
        {
            path: '/not-found',
            element: (
                <LayoutMain>
                    <NotFoundPage />
                </LayoutMain>
            ),
        },
        {
            path: '*',
            element: (
                <LayoutMain>
                    <NotFoundPage />
                </LayoutMain>
            ),
        },
    ])
}

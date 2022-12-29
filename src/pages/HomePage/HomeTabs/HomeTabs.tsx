import React, { FC } from 'react'
import { IProduct } from '@/models/product.models'
import { Card, Spinner, Tabs } from '../../../components'
import {
    useGetProductsByReleaseDateQuery,
    useGetProductsBySalesQuery,
} from '@/redux/api/productsAPI/products.api'
import styles from './HomeTabs.module.scss'

const HomeTabs: FC = () => {
    const { data: productsBySales, isLoading: isLoadingBySales } = useGetProductsBySalesQuery(10)
    const { data: productsByReleaseDate, isLoading: isLoadingByDate } =
        useGetProductsByReleaseDateQuery(10)

    const renderContent = (arr: IProduct[] | undefined) => {
        return arr?.map((product) => <Card type={'Product'} {...product} key={product._id} />)
    }

    if (isLoadingBySales || isLoadingByDate) {
        return <Spinner />
    }

    return (
        <>
            <Tabs
                tabsClass={styles.HomeTabs}
                activeTabClass={styles.activeTab}
                contentTabClass={styles.HomeTabsContent}
                tabs={[
                    {
                        name: 'Новинки',
                        content: renderContent(productsByReleaseDate),
                    },
                    {
                        name: 'Лидеры продаж',
                        content: renderContent(productsBySales),
                    },
                ]}
            />
        </>
    )
}

export default HomeTabs

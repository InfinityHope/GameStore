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
                        content: (
                            <div
                                className={
                                    'grid grid-cols-5 gap-y-10 items-center overflow-x-auto w-full'
                                }
                            >
                                {renderContent(productsByReleaseDate)}
                            </div>
                        ),
                    },
                    {
                        name: 'Лидеры продаж',
                        content: (
                            <div
                                className={
                                    'grid grid-cols-5 gap-y-10 items-center overflow-x-auto w-full'
                                }
                            >
                                {renderContent(productsBySales)}
                            </div>
                        ),
                    },
                ]}
            />
        </>
    )
}

export default HomeTabs

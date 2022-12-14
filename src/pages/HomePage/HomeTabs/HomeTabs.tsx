import React from 'react'
import { Card, Spinner, Tabs } from '../../../components'
import { IProduct } from '../../../models/product.models'
import styles from './HomeTabs.module.scss'
import {
    useGetProductsByReleaseDateQuery,
    useGetProductsBySalesQuery,
} from '../../../redux/api/productsAPI/products.api'

const HomeTabs = () => {
    const { data: productsBySales, isLoading: isLoadingSales } = useGetProductsBySalesQuery(8)
    const { data: productsByReleaseDate, isLoading: isLoadingReleaseDate } =
        useGetProductsByReleaseDateQuery(8)

    const renderContent = (arr: IProduct[] | undefined) => {
        return arr?.map((product) => <Card type={'Product'} {...product} key={product._id} />)
    }

    if (isLoadingReleaseDate || isLoadingSales) {
        return <Spinner />
    }

    return (
        <Tabs
            tabsClass={styles.HomeTabs}
            activeTabClass={styles.activeTab}
            contentTabClass={'bg-transparent'}
            tabs={[
                {
                    name: 'Новинки',
                    content: (
                        <div className={'grid grid-columns-5 gap-y-10 items-center'}>
                            {renderContent(productsByReleaseDate)}
                        </div>
                    ),
                },
                {
                    name: 'Лидеры продаж',
                    content: (
                        <div className={'grid grid-columns-5 gap-y-10 items-center'}>
                            {renderContent(productsBySales)}
                        </div>
                    ),
                },
            ]}
        />
    )
}

export default HomeTabs

import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { Breadcrumbs, Card, Spinner } from '@/components'
import { useGetAllProductsQuery } from '@/reduxApi/productsAPI/products.api'
import ReactPaginate from 'react-paginate'
import styles from './SearchPage.module.scss'

const SearchPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [page, setPage] = useState(1)
    const onChangePage = (page: number) => setPage(page)

    const { data, isLoading } = useGetAllProductsQuery({
        search: location.state,
        limit: 10,
        page,
    })

    useEffect(() => {
        if (!location.state) {
            navigate('/not-found')
        }
    }, [location.state])

    return (
        <div className={styles.SearchPage}>
            <Breadcrumbs
                breadcrumbs={[
                    {
                        link: '/',
                        label: 'Главная',
                    },
                    {
                        link: '/search',
                        label: `Результаты поиска по ${location.state}`,
                    },
                ]}
            />
            <div className="container">
                {data ? (
                    <>
                        <h2 className={styles.SearchPageTitle}>
                            Результаты поиска по запросу: <span>{location.state}</span>
                        </h2>
                        <div className={styles.SearchPageCards}>
                            {isLoading ? (
                                <Spinner />
                            ) : (
                                data.products.map((product) => (
                                    <Card key={product._id} {...product} />
                                ))
                            )}
                        </div>
                        {data.pages > 1 ? (
                            <ReactPaginate
                                nextLabel=">"
                                pageRangeDisplayed={2}
                                breakLabel="..."
                                onPageChange={(event) => onChangePage(event.selected + 1)}
                                marginPagesDisplayed={3}
                                pageCount={data.pages}
                                previousLabel="<"
                                pageClassName="py-2 px-4 text-2xl "
                                previousClassName="mr-4 text-3xl transition transition-all duration-300 hover:text-[#e27e58]"
                                nextClassName="ml-4 text-3xl transition transition-all duration-300 hover:text-[#e27e58]"
                                containerClassName="flex text-white text-2xl justify-start items-center mt-24 w-full"
                                activeClassName="border border-[#e27e58] rounded-2xl text-[#e27e58] "
                            />
                        ) : (
                            ''
                        )}
                    </>
                ) : null}
            </div>
        </div>
    )
}

export default SearchPage

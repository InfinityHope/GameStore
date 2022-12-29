import { useGetAllProductsQuery } from '@/reduxApi/productsAPI/products.api'
import { Breadcrumbs, Card, Dropdown, Spinner } from '@/components'
import ReactPaginate from 'react-paginate'
import { ChangeEvent, useState } from 'react'
import { Button, Checkbox, Select } from '@/components/UI'
import { developersData, genresData, publishersData } from '@/data/filters/filtersData'
import styles from './CatalogPage.module.scss'
import { sortData } from '@/data/filters/sortData'

const CatalogPage = () => {
    const [page, setPage] = useState(1)

    const [showAllFilters, setShowAllFilters] = useState<boolean>(false)

    const [sortType, setSortType] = useState<{ label: string; value: string }>({
        label: 'По убыванию цены',
        value: 'priceDesc',
    })
    const [genres, setGenres] = useState<string[]>([])
    const [developers, setDevelopers] = useState<string[]>([])
    const [publishers, setPublishers] = useState<string[]>([])

    const { data, isLoading } = useGetAllProductsQuery({
        limit: 10,
        page,
        genres: genres.join(','),
        developers: developers.join(','),
        publishers: publishers.join(','),
        sort: sortType.value,
    })

    const onChangePage = (page: number) => setPage(page)

    const changeGenres = (e: ChangeEvent<HTMLInputElement>) => {
        if (genres.includes(e.target.value)) {
            setGenres(genres.filter((genre) => genre !== e.target.value))
        } else {
            setGenres([...genres, e.target.value])
        }
    }

    const changeDevelopers = (e: ChangeEvent<HTMLInputElement>) => {
        if (developers.includes(e.target.value)) {
            setDevelopers(developers.filter((developer) => developer !== e.target.value))
        } else {
            setDevelopers([...developers, e.target.value])
        }
    }

    const changePublishers = (e: ChangeEvent<HTMLInputElement>) => {
        if (publishers.includes(e.target.value)) {
            setPublishers(publishers.filter((publisher) => publisher !== e.target.value))
        } else {
            setPublishers([...publishers, e.target.value])
        }
    }

    const clearFilters = () => {
        setPublishers([])
        setDevelopers([])
        setGenres([])
        setSortType({
            label: '',
            value: '',
        })
    }

    return (
        <div className={styles.Catalog}>
            <Breadcrumbs
                breadcrumbs={[
                    {
                        label: 'Главная',
                        link: '/',
                    },
                    {
                        label: 'Каталог',
                        link: '/catalog',
                    },
                ]}
            />
            {data && (
                <div className={'container'}>
                    <h3 className={styles.CatalogTitle}>
                        Каталог игр: <span className={'text-[#e27e58]'}>{data.total}</span>
                    </h3>
                    <div className={styles.CatalogFilters}>
                        <div className={styles.CatalogFiltersBlock}>
                            \
                            <Select
                                selected={sortType}
                                setSelected={setSortType}
                                options={sortData}
                            />
                            <Dropdown title={'Жанр'} zIndex={50}>
                                {genresData.map((genre) => (
                                    <Dropdown.Item key={genre}>
                                        <Checkbox
                                            value={genre}
                                            name={genre}
                                            onChange={changeGenres}
                                        />
                                    </Dropdown.Item>
                                ))}
                            </Dropdown>
                        </div>

                        <div className={styles.CatalogFiltersButtons}>
                            <Button onClick={clearFilters}>Очистить фильтры</Button>
                            <Button onClick={() => setShowAllFilters(!showAllFilters)}>
                                {!showAllFilters ? 'Все фильтры' : 'Скрыть фильтры'}
                            </Button>
                        </div>
                    </div>
                    {showAllFilters && (
                        <div className={styles.CatalogHiddenFilters}>
                            <Dropdown title={'Разработчик'}>
                                {developersData.map((developer) => (
                                    <Dropdown.Item key={developer}>
                                        <Checkbox
                                            value={developer}
                                            name={developer}
                                            onChange={changeDevelopers}
                                        />
                                    </Dropdown.Item>
                                ))}
                            </Dropdown>
                            <Dropdown title={'Издатель'}>
                                {publishersData.map((publisher) => (
                                    <Dropdown.Item key={publisher}>
                                        <Checkbox
                                            value={publisher}
                                            name={publisher}
                                            onChange={changePublishers}
                                        />
                                    </Dropdown.Item>
                                ))}
                            </Dropdown>
                        </div>
                    )}
                    <div className={'grid gap-y-6 grid-columns-5 pt-16'}>
                        {isLoading ? (
                            <Spinner />
                        ) : (
                            data.products.map((product) => <Card key={product._id} {...product} />)
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
                </div>
            )}
        </div>
    )
}

export default CatalogPage

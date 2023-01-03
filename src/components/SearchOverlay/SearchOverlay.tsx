import styles from './SearchOverlay.module.scss'
import { Card, Spinner } from '@/components'
import { useContext, useEffect, useRef } from 'react'
import { SearchOverlayContext } from '@/context/SearchOverlayContext/SearchOverlayContext'
import { useGetAllProductsQuery } from '@/reduxApi/productsAPI/products.api'
import { useDebounce } from '@/hooks/useDebounce'
import { useOutside } from '@/hooks/useOutside'
import { Button } from '@/components/UI'
import { useNavigate } from 'react-router'

const SearchOverlay = () => {
    const { showOverlay, searchTerm, activeOverlay } = useContext(SearchOverlayContext)
    const navigate = useNavigate()
    const debouncedValue = useDebounce(searchTerm, 1500)
    const overlayRef = useRef<HTMLDivElement>(null)
    const checkOutside = useOutside(overlayRef)

    const { data, isLoading } = useGetAllProductsQuery({
        search: debouncedValue,
        limit: 12,
    })

    const redirectToPage = (path: string, state?: string) => {
        document.body.style.overflow = 'auto'
        showOverlay(false)
        navigate(path, { state: state ? state : null })
    }

    useEffect(() => {
        if (location.pathname.includes('/')) {
            showOverlay(false)
        }
    }, [location.pathname])

    useEffect(() => {
        if (checkOutside) {
            document.body.style.overflow = 'auto'
            showOverlay(false)
        }
        return () => {
            showOverlay(false)
        }
    }, [checkOutside])

    return (
        <>
            {activeOverlay ? (
                data && !isLoading ? (
                    <div className={styles.SearchOverlay} ref={overlayRef}>
                        <div className={styles.SearchOverlayTitle}>
                            <h3>
                                Результаты поиска: <span>{data.products.length}</span>
                            </h3>
                            <button onClick={() => showOverlay(false)}>&#10006;</button>
                        </div>
                        <div className={styles.SearchOverlayContent}>
                            {data.products.map((product) => (
                                <Card {...product} key={product._id} />
                            ))}
                            <div className={'w-full'}>
                                {data.products.length > 10 ? (
                                    <div className={'w-1/4'}>
                                        {debouncedValue !== '' ? (
                                            <Button
                                                onClick={() =>
                                                    redirectToPage('/search', debouncedValue)
                                                }
                                            >
                                                Посмотреть все
                                            </Button>
                                        ) : (
                                            <Button onClick={() => redirectToPage('/catalog')}>
                                                Посмотреть все
                                            </Button>
                                        )}
                                    </div>
                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <Spinner />
                )
            ) : (
                ''
            )}
        </>
    )
}

export default SearchOverlay

//Стили
import styles from './LibraryView.module.scss'
//Хуки
import { useOutletContext } from 'react-router'
//Компоненты
import LayoutProfile from '@/layouts/LayoutProfile'
import { Card, Slider, Spinner } from '@/components'
import { useGetUserLibraryQuery } from '@/redux/api/userAPI/user.api'
import { useEffect, useLayoutEffect, useState } from 'react'

const LibraryView = () => {
    const _id: string = useOutletContext()
    const { data: userLibrary, isLoading, refetch } = useGetUserLibraryQuery(_id)
    const [slidesShow, setSlidesShow] = useState(4)

    useLayoutEffect(() => {
        refetch()
    }, [userLibrary])

    useEffect(() => {
        if (window.screen.width <= 1310) {
            setSlidesShow(3)
        }
        if (window.screen.width <= 990) {
            setSlidesShow(2)
        }
        if (window.screen.width <= 535) {
            setSlidesShow(1)
        }
    }, [window])

    return (
        <LayoutProfile label={'Библиотека'} link={'/profile/library'} _id={_id}>
            {isLoading ? (
                <Spinner />
            ) : (
                <div className={styles.LibraryView}>
                    {userLibrary &&
                        (userLibrary.length === 0 ? (
                            <h3>Ваша библиотека пуста :c</h3>
                        ) : userLibrary.length > 4 ? (
                            <Slider slidesToShow={slidesShow} type={'Multiple'} disableLastBtn>
                                {userLibrary.map((product) => (
                                    <Slider.Page key={product.productId}>
                                        <Card
                                            type={'LibraryGame'}
                                            {...product}
                                            _id={product.productId}
                                            key={product.productId}
                                        />
                                    </Slider.Page>
                                ))}
                            </Slider>
                        ) : (
                            <div className={styles.LibraryViewCards}>
                                {userLibrary.map((product) => (
                                    <Card
                                        type={'LibraryGame'}
                                        {...product}
                                        _id={product.productId}
                                        key={product.productId}
                                    />
                                ))}
                            </div>
                        ))}
                </div>
            )}
        </LayoutProfile>
    )
}

export default LibraryView

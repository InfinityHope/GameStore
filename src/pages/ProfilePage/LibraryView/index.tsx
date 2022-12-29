//Стили
import styles from './LibraryView.module.scss'
//Хуки
import { useOutletContext } from 'react-router'
//Компоненты
import LayoutProfile from '@/layouts/LayoutProfile'
import { Card, Slider, Spinner } from '@/components'
import { useGetUserLibraryQuery } from '@/redux/api/userAPI/user.api'

const LibraryView = () => {
    const _id: string = useOutletContext()
    const { data: userLibrary, isLoading } = useGetUserLibraryQuery(_id)

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
                            <Slider slidesToShow={4} type={'Multiple'} disableLastBtn>
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
                            <>
                                {userLibrary.map((product) => (
                                    <Card
                                        type={'LibraryGame'}
                                        {...product}
                                        _id={product.productId}
                                        key={product.productId}
                                    />
                                ))}
                            </>
                        ))}
                </div>
            )}
        </LayoutProfile>
    )
}

export default LibraryView

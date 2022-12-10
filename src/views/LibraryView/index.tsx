//Стили
import styles from './LibraryView.module.scss'
//Хуки
import { useAppSelector } from '../../redux/hooks/redux'
import { useOutletContext } from 'react-router'
//Компоненты
import LayoutProfile from '../../Layouts/LayoutProfile'
import { Card, Slider } from '../../components'

const LibraryView = () => {
    const { userLibrary } = useAppSelector((state) => state.user)

    const _id: string = useOutletContext()

    return (
        <LayoutProfile
            label={'Библиотека'}
            link={'/profile/library'}
            _id={_id}
        >
            <div className={styles.LibraryView}>
                {userLibrary.length === 0 ? (
                    <h3>Ваша библиотека пуста :c</h3>
                ) : userLibrary.length > 4 ? (
                    <Slider slidesToShow={4} type={'Multiple'}>
                        {userLibrary.map((product) => (
                            <Slider.Page>
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
                )}
            </div>
        </LayoutProfile>
    )
}

export default LibraryView

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
        <LayoutProfile label={'Библиотека'} link={'/profile/library'} _id={_id}>
            <div className={styles.LibraryView}>
                <Slider slidesToShow={4} type={'Multiple'}>
                    {userLibrary.map((product) => {
                        return (
                            <Slider.Page>
                                <Card
                                    type={'LibraryGame'}
                                    {...product}
                                    key={product._id}
                                />
                            </Slider.Page>
                        )
                    })}
                </Slider>
            </div>
        </LayoutProfile>
    )
}

export default LibraryView

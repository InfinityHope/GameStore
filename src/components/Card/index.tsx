//Библиотеки
import { FC } from 'react'
//Стили
import styles from './Card.module.scss'
//Типы
//Компоненты
import { NavLink } from 'react-router-dom'
import { Button } from '../UI'

interface IProps {
    _id: string
    title: string
    img: string
    price?: number
    platform?: string
    type?: 'Product' | 'LibraryGame'
}

const Card: FC<IProps> = ({
    _id,
    title,
    img,
    price,
    platform,
    type = 'Product',
}) => {
    return (
        <div
            className={
                type === 'Product'
                    ? `${styles.card}  hover:-translate-y-2`
                    : styles.card
            }
        >
            <NavLink to={`/catalog/${_id}`}>
                <div>
                    <img src={img} alt="poster" />
                </div>
                <h3>{title}</h3>
            </NavLink>
            {type !== 'LibraryGame' ? (
                <>
                    <span>{platform}</span>

                    <div className={styles['card-bottom']}>
                        <span>{price} ₽</span>
                    </div>

                    <Button type={'Card'} onClick={() => console.log(_id)}>
                        Купить
                    </Button>
                </>
            ) : (
                ''
            )}
        </div>
    )
}

export default Card

//Библиотеки
import { FC } from 'react'
//Стили
import styles from './Cards.module.scss'
//Типы
import { IProduct } from '../../redux/models/IProduct'
import { ILibraryGame } from '../../redux/models/ILibraryGame'
//Компоненты
import { Card } from '../'

interface IProps {
    products: IProduct[] | ILibraryGame[]
    cardsType?: 'Product' | 'LibraryGame'
}

const Cards: FC<IProps> = ({ products, cardsType = 'Product' }) => {
    return (
        <>
            <div className={`${styles.CardsWrapper} grid-columns-4`}>
                {products.map((product) => (
                    <Card type={cardsType} {...product} key={product._id} />
                ))}
            </div>
        </>
    )
}

export default Cards

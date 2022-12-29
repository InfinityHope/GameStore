//Библиотеки
import { FC } from 'react'
//Стили
import styles from './DescriptionView.module.scss'
//Типы
import { IProduct } from '@/models/product.models'

const DescriptionView: FC<{ product: IProduct }> = ({ product }) => {
    return (
        <div className={styles.Description}>
            {product.description && (
                <>
                    <h2>{product.description.title}</h2>
                    <p>{product.description.text}</p>
                </>
            )}
        </div>
    )
}

export default DescriptionView

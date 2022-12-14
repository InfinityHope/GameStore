import { FC } from 'react'
import styles from './CartItem.module.scss'
import { NavLink } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'

interface IProps {
    productId: string
    title: string
    price: number
    img: string
    serviceActivation?: string
    regionActivation?: string
}

const CartItem: FC<IProps> = ({
    productId,
    title,
    price,
    img,
    serviceActivation,
    regionActivation,
}) => {
    const { deleteCartItem } = useActions()

    return (
        <div className={styles.CartItem}>
            <NavLink to={`/catalog/${productId}`} className={styles.CartItemImg}>
                <img src={img} alt="cart-item-img" />
            </NavLink>
            <div className={styles.CartItemContent}>
                <div className={styles.CartItemTitle}>
                    <div className={styles.CartItemText}>{title}</div>
                    <button
                        onClick={() =>
                            deleteCartItem({
                                productId,
                                title,
                                img,
                                price,
                            })
                        }
                        className={styles.CartItemDelete}
                    >
                        &#10006;
                    </button>
                </div>
                <div className={styles.CartItemPrice}>{price} ₽</div>
                <ul className={styles.CartItemActivation}>
                    <li>
                        <span>Регион активации:</span>
                        <b>{regionActivation}</b>
                    </li>
                    <li>
                        <span>Сервис активации:</span>
                        <b>{serviceActivation}</b>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CartItem

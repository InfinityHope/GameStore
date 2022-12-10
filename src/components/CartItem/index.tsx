import { FC } from 'react'
import styles from './CartItem.module.scss'
import { NavLink } from 'react-router-dom'
import { ICartItem } from '../../redux/models/cart.models'
import { deleteCartItem } from '../../redux/reducers/CartReducer'
import { useAppDispatch } from '../../redux/hooks/redux'

interface IProps {
    productId: string
    title: string
    price: number
    img: string
}

const CartItem: FC<IProps> = ({ productId, title, price, img }) => {
    const dispatch = useAppDispatch()

    const deleteCartItemHandler = ({ productId, title, img, price }: ICartItem) => {
        dispatch(deleteCartItem({ productId, title, price, img }))
    }

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
                            deleteCartItemHandler({
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
                <div className={styles.CartItemRegions}>
                    Регион активации: <span>Россия, Беларусь и СНГ</span>
                </div>
            </div>
        </div>
    )
}

export default CartItem

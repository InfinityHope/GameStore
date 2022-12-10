import React, { useContext } from 'react'
import LayoutMain from '../../Layouts/LayoutMain'
import { Breadcrumbs, CartItem } from '../../components'
import styles from './CartPage.module.scss'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/redux'
import { SidebarContext } from '../../context/SidebarContext/SidebarContext'
import { Button } from '../../components/UI'
import { createOrder } from '../../redux/reducers/CartReducer/asyncActions'
import { NavLink } from 'react-router-dom'

const CartPage = () => {
    const { cartItems, totalPrice } = useAppSelector((state) => state.cart)
    const { token, user } = useAppSelector((state) => state.auth.authData)
    const { showSidebar } = useContext(SidebarContext)
    const dispatch = useAppDispatch()

    const createOrderHandler = () => {
        if (token) {
            const userId = user._id
            dispatch(createOrder({ cartItems, userId }))
        } else {
            if (showSidebar) {
                showSidebar()
            }
        }
    }

    return (
        <LayoutMain>
            <Breadcrumbs
                breadcrumbs={[
                    {
                        label: 'Главная',
                        link: '/',
                    },
                    {
                        label: 'Ваша корзина',
                        link: '/cart',
                    },
                ]}
            />
            <div className={`${styles.CartPage} container`}>
                <div className={styles.CartContainer}>
                    {cartItems.length <= 0 ? (
                        <div className={styles.CartEmpty}>
                            <h3>В вашей корзине еще ничего нет :(</h3>
                            <NavLink to={'/catalog'}>
                                <Button>Перейти в каталог</Button>
                            </NavLink>
                        </div>
                    ) : (
                        <>
                            <div className={styles.CartItems}>
                                <h2>Мой заказ</h2>
                                {cartItems.map((cartItem) => {
                                    return <CartItem key={cartItem.productId} {...cartItem} />
                                })}
                            </div>
                            <div className={styles.CartTotal}>
                                <div>
                                    <span>Итого:</span>
                                    <span>{totalPrice} ₽</span>
                                </div>
                                <hr />
                                <Button onClick={createOrderHandler}>Оплатить</Button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </LayoutMain>
    )
}

export default CartPage

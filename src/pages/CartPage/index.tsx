//Библиотеки
import React, { useContext } from 'react'
//Стили
import styles from './CartPage.module.scss'
//Хуки
import { useAppSelector } from '../../hooks/useAppSelector'
//Асинхронные экшены
//Контекст
import { SidebarContext } from '../../context/SidebarContext/SidebarContext'
//Компоненты
import LayoutMain from '../../Layouts/LayoutMain'
import { Button } from '../../components/UI'
import { NavLink } from 'react-router-dom'
import { Breadcrumbs, CartItem } from '../../components'
import { useCreateOrderMutation } from '../../redux/api/orderAPI/order.api'
import { useActions } from '../../hooks/useActions'

const CartPage = () => {
    const { cartItems, totalPrice } = useAppSelector((state) => state.cart)
    const { token, user } = useAppSelector((state) => state.auth.authData)
    const { clearCart } = useActions()
    const [createOrder, { isLoading, isError }] = useCreateOrderMutation()
    const { showSidebar } = useContext(SidebarContext)

    const createOrderHandler = () => {
        if (token) {
            const userId = user._id
            createOrder({ cartItems, userId }).then(() => {
                clearCart()
            })
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
                        !isLoading && (
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
                        )
                    )}
                </div>
            </div>
        </LayoutMain>
    )
}

export default CartPage

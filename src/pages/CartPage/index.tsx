//Библиотеки
import React, { useContext } from 'react'
//Стили
import styles from './CartPage.module.scss'
//Хуки
import { useAppSelector } from '@/hooks/useAppSelector'
//Асинхронные экшены
//Контекст
import { SidebarContext } from '@/context/SidebarContext/SidebarContext'
//Компоненты
import { Button } from '@/components/UI'
import { NavLink } from 'react-router-dom'
import { Breadcrumbs, CartItem, Spinner } from '../../components'
import { useCreateOrderMutation } from '../../redux/api/orderAPI/order.api'
import { useActions } from '@/hooks/useActions'

const CartPage = () => {
    const { cartItems, totalPrice } = useAppSelector((state) => state.cart)
    const { token, user } = useAppSelector((state) => state.auth.authData)
    const [createOrder, { isLoading, isError }] = useCreateOrderMutation()
    const { clearCart } = useActions()
    const { showSidebar } = useContext(SidebarContext)

    const createOrderHandler = async () => {
        try {
            if (!token) {
                showSidebar()
            }
            const userId = user._id
            await createOrder({ cartItems, userId }).unwrap()
            clearCart()
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
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
                    ) : isLoading ? (
                        <Spinner />
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
        </>
    )
}

export default CartPage

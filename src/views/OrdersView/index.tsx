import React from 'react'
import LayoutProfile from '../../Layouts/LayoutProfile'
import { useOutletContext } from 'react-router'
import { useAppSelector } from '../../hooks/useAppSelector'
import { Order } from '../../components'
import { Button } from '../../components/UI'
import styles from './Orders.module.scss'
import { NavLink } from 'react-router-dom'

const OrdersView = () => {
    const _id: string = useOutletContext()
    const { userOrders } = useAppSelector((state) => state.user)

    return (
        <LayoutProfile label={'Заказы'} link={'/profile/orders'} _id={_id}>
            <div className={styles.OrdersView}>
                {userOrders.length === 0 ? (
                    <div className={styles.OrdersNone}>
                        <h3>У вас пока нет сделанных заказов</h3>
                        <Button>
                            <NavLink to={'/catalog'}>Перейти в каталог</NavLink>
                        </Button>
                    </div>
                ) : (
                    userOrders.map((order) => <Order key={order.licenseKey} {...order} />)
                )}
            </div>
        </LayoutProfile>
    )
}

export default OrdersView

import React from 'react'
import LayoutProfile from '@/layouts/LayoutProfile'
import { useOutletContext } from 'react-router'
import { Order, Spinner } from '@/components'
import { Button } from '@/components/UI'
import styles from './Orders.module.scss'
import { NavLink } from 'react-router-dom'
import { useGetUserOrdersQuery } from '@/redux/api/userAPI/user.api'

const OrdersView = () => {
    const _id: string = useOutletContext()
    const {
        data: userOrders,
        isLoading,
        refetch,
    } = useGetUserOrdersQuery(_id, { refetchOnMountOrArgChange: true })

    return (
        <LayoutProfile label={'Заказы'} link={'/profile/orders'} _id={_id}>
            {isLoading ? (
                <Spinner />
            ) : (
                <div className={styles.OrdersView}>
                    {userOrders &&
                        (userOrders.length === 0 ? (
                            <div className={styles.OrdersNone}>
                                <h3>У вас пока нет сделанных заказов</h3>
                                <Button>
                                    <NavLink to={'/catalog'}>Перейти в каталог</NavLink>
                                </Button>
                            </div>
                        ) : (
                            userOrders.map((order) => <Order key={order.licenseKey} {...order} />)
                        ))}
                </div>
            )}
        </LayoutProfile>
    )
}

export default OrdersView

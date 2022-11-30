import React from 'react'
import LayoutProfile from '../../Layouts/LayoutProfile'
import { useOutletContext } from 'react-router'
import { useAppSelector } from '../../redux/hooks/redux'
import Order from '../../components/Order/Order'

const OrdersView = () => {
    const _id: string = useOutletContext()
    const { userOrders } = useAppSelector((state) => state.user)
    return (
        <LayoutProfile label={'Заказы'} link={'/profile/orders'} _id={_id}>
            <div>
                {userOrders.map((order) => (
                    <Order {...order} />
                ))}
            </div>
        </LayoutProfile>
    )
}

export default OrdersView

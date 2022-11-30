import { FC } from 'react'

interface IProps {
    date: string
    productId: string
    price: number
    img: string
    licenseKey: string
    title: string
}

const Order: FC<IProps> = ({
    date,
    price,
    img,
    licenseKey,
    productId,
    title,
}) => {
    return (
        <ul className={'text-white'}>
            <li>{date}</li>
            <li>{productId}</li>
            <li>{price}</li>
            <li>{title}</li>
            <li>{licenseKey}</li>
            <li>{img}</li>
        </ul>
    )
}

export default Order

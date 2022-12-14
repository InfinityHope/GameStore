import { FC, useRef } from 'react'
import styles from './Order.module.scss'
import { NavLink } from 'react-router-dom'
import { transformString } from '../../utils/transformString'

interface IProps {
    date: string
    productId: string
    price: number
    img: string
    licenseKey: string
    title: string
}

const Order: FC<IProps> = ({ date, price, img, licenseKey, productId, title }) => {
    const licenseKeyRef = useRef<HTMLLIElement>(null)

    const copyKey = async () => {
        if (licenseKeyRef.current) {
            await navigator.clipboard.writeText(licenseKeyRef.current.textContent || '')
        }
    }

    return (
        <div className={styles.Order}>
            <ul className={styles.OrderDetails}>
                <li>
                    {title} - {new Date(date).toLocaleDateString()}
                </li>
                <li ref={licenseKeyRef}>
                    {licenseKey}
                    <button onClick={copyKey}>
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                x="7"
                                y="11"
                                width="13"
                                height="16"
                                rx="2"
                                stroke="white"
                                strokeWidth="2"
                            ></rect>
                            <path
                                d="M22 21H23C24.1046 21 25 20.1046 25 19V7C25 5.89543 24.1046 5 23 5H14C12.8954 5 12 5.89543 12 7V8"
                                stroke="white"
                                strokeWidth="2"
                            ></path>
                        </svg>
                    </button>
                </li>
            </ul>
            <span>{price} ₽</span>
            <NavLink
                to={`/catalog/${transformString(title)}`}
                state={{ id: productId }}
                className={styles.OrderImg}
            >
                <img src={img} alt="product-img" />
            </NavLink>
        </div>
    )
}

export default Order

import { FC, ReactNode } from 'react'
import styles from './Item.module.scss'

const Item: FC<{
    children: ReactNode
}> = ({ children }) => {
    return <div className={styles.DropdownItem}>{children}</div>
}

export default Item

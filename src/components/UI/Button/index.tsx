//Библиотеки
import { FC, ReactNode } from 'react'
//Стили
import styles from './Button.module.scss'

interface IProps {
    children: ReactNode
    onClick?: () => void
    type?: 'Card' | 'Header'
    disabled?: boolean
}

const Button: FC<IProps> = ({ children, onClick, type, disabled }) => {
    return (
        <button
            disabled={disabled}
            className={`${styles.Button} ${
                type === 'Card' ? styles.ButtonCard : ''
            } ${type === 'Header' ? styles.ButtonHeader : ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button

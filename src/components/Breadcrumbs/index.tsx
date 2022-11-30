//Библиотеки
import { FC, MouseEvent } from 'react'
//Стили
import styles from './Breadcrumbs.module.scss'
//Компоненты
import { NavLink } from 'react-router-dom'
import { IBreadcrumb } from './Breadcrumbs.types'

type IProps = {
    breadcrumbs: IBreadcrumb[]
}

const Breadcrumbs: FC<IProps> = ({ breadcrumbs }) => {
    const isLast = (index: number) => {
        return index === breadcrumbs.length - 1
    }

    const handleClick = (e: MouseEvent<HTMLAnchorElement>, index: number) => {
        if (isLast(index)) e.preventDefault()
    }

    return (
        <ol className={styles.breadcrumbs}>
            {breadcrumbs.map(({ link, label }, index) => {
                const disabled: string = isLast(index)
                    ? 'text-gray-600 cursor-default'
                    : ''
                return (
                    <li key={link}>
                        <NavLink
                            className={disabled}
                            onClick={(e) => handleClick(e, index)}
                            to={link}
                        >
                            {label}
                        </NavLink>
                    </li>
                )
            })}
        </ol>
    )
}

export default Breadcrumbs

//Библиотеки
import { FC, useState } from 'react'
//Стили
import styles from './SideMenu.module.scss'
//Хуки
import { useAppDispatch } from '../../redux/hooks/redux'
//Асинхронные функции
import { logout } from '../../redux/reducers/AuthReducer'
//Компоненты
import { NavLink } from 'react-router-dom'

const SideMenu: FC<{ _id: string }> = ({ _id }) => {
    const [links, setLinks] = useState([
        {
            link: `/profile`,
            label: 'Профиль',
            _id,
        },
        {
            link: '/profile/data',
            label: 'Личные данные',
            _id,
        },
        {
            link: '/profile/orders',
            label: 'Заказы',
            _id,
        },
        {
            link: '/profile/library',
            label: 'Библиотека',
            _id,
        },
    ])
    const dispatch = useAppDispatch()

    return (
        <ul className={styles.SideMenu}>
            {links.map(({ link, label, _id }, index) => {
                return (
                    <li key={index}>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? styles.Active : undefined
                            }
                            to={link}
                            state={{ _id }}
                            end={true}
                        >
                            {label}
                        </NavLink>
                    </li>
                )
            })}
            <li>
                <NavLink to={'/'} end={true} onClick={() => dispatch(logout())}>
                    Выйти
                </NavLink>
            </li>
        </ul>
    )
}

export default SideMenu

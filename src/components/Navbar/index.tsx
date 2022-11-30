//Библиотеки
import { FC } from 'react'
//Стили
import styles from './Navbar.module.scss'

//Компоненты
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo.png'

const Navbar: FC = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <NavLink to={'/'}>
                        <img width={150} src={logo} alt="logo" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/catalog'}>Каталог</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

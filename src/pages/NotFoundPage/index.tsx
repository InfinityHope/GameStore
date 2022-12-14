import styles from './NotFoundPage.module.scss'
import LayoutMain from '../../Layouts/LayoutMain'
import { NavLink } from 'react-router-dom'
import { Button } from '../../components/UI'

const NotFoundPage = () => {
    return (
        <LayoutMain>
            <div className={styles.NotFoundPage}>
                <h2>Ошибка 404</h2>
                <h4>Страница не найдена</h4>
                <NavLink to={'/'}>
                    <Button>Перейти на главную</Button>
                </NavLink>
            </div>
        </LayoutMain>
    )
}

export default NotFoundPage

//Библиотеки
import { FC, ReactNode } from 'react'
//Стили
import styles from './LayoutProfile.module.scss'
//Компоненты
import { Breadcrumbs, SideMenu } from '../../components'

interface IProps {
    label: string
    link: string
    _id: string
    children: ReactNode
}

const LayoutProfile: FC<IProps> = ({ label, link, _id, children }) => {
    return (
        <div className={styles.LayoutProfile}>
            <Breadcrumbs
                breadcrumbs={[
                    { link: '/', label: 'Главная' },
                    {
                        link: link,
                        label: label,
                    },
                ]}
            />
            <div className={styles.LayoutContainer}>
                <SideMenu _id={_id} />
                <div className={styles.LayoutView}>{children}</div>
            </div>
        </div>
    )
}

export default LayoutProfile

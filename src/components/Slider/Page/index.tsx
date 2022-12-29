//Библиотеки
import { FC, ReactNode, useContext } from 'react'
//Стили
//Контекст
import { SliderContext } from '@/context/SliderContext/SliderContext'
import styles from './Page.module.scss'

export const Page: FC<{ children: ReactNode }> = ({ children }) => {
    let { width, slidesToShow, type, slideOffset } = useContext(SliderContext)

    return (
        <div
            style={{
                marginRight: `${slideOffset}px`,
                minWidth: `${width / slidesToShow - slideOffset}px`,
                maxWidth: `${width / slidesToShow - slideOffset}px`,
            }}
            className={type === 'Single' ? styles.Single : styles.Multiple}
        >
            {children}
        </div>
    )
}

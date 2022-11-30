//Библиотеки
import { FC, ReactNode, useContext } from 'react'
//Стили
//Контекст
import { SliderContext } from '../../../context/SliderContext'
import styles from './Page.module.scss'

export const Page: FC<{ children: ReactNode }> = ({ children }) => {
    let { width, slidesToShow, type } = useContext(SliderContext)

    return (
        <div
            style={{
                minWidth: `${width / slidesToShow}px`,
                maxWidth: `${width / slidesToShow}px`,
            }}
            className={type === 'Single' ? styles.Single : ''}
        >
            {children}
        </div>
    )
}

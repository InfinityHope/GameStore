//Библиотеки
import { useLayoutEffect, useRef, useState } from 'react'
//Стили
import styles from './Slider.module.scss'
//Компоненты
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { Page } from './Page'
import { SliderContext } from '../../context/SliderContext'

interface IProps {
    children: any
    type?: 'Single' | 'Multiple'
    slidesToShow?: number
}

const Slider = ({ children, type = 'Single', slidesToShow = 1 }: IProps) => {
    const [offset, setOffset] = useState(0)
    const windowRef = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState(0)

    useLayoutEffect(() => {
        if (windowRef.current) {
            setWidth(windowRef.current.clientWidth)
            console.log(width)
        }
    }, [width])

    const handleOnNextClick = (): void => {
        setOffset((currentOffset) => {
            let newOffset = currentOffset - width / slidesToShow
            let maxOffset = -((width / slidesToShow) * (children.length - 1))
            return Math.max(newOffset, maxOffset)
        })
    }

    const handleOnPrevClick = (): void => {
        setOffset((currentOffset) => {
            let newOffset = currentOffset + width / slidesToShow
            return Math.min(newOffset, 0)
        })
    }

    return (
        <SliderContext.Provider value={{ width, slidesToShow, type }}>
            <div className={styles.slider}>
                <div className={styles.window} ref={windowRef}>
                    <div
                        className={styles.slides}
                        style={{ transform: `translateX(${offset}px)` }}
                    >
                        {children}
                    </div>
                </div>
                <div
                    className={`${styles.buttons} ${
                        type === 'Single' ? styles.Single : styles.Multiple
                    }`}
                >
                    <button onClick={handleOnPrevClick}>
                        <GrFormPrevious size={30} />
                    </button>
                    <button onClick={handleOnNextClick}>
                        <GrFormNext size={30} />
                    </button>
                </div>
            </div>
        </SliderContext.Provider>
    )
}
Slider.Page = Page
export default Slider

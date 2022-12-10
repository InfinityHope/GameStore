//Библиотеки
import { FC, ReactNode, useEffect, useRef, useState } from 'react'
//Стили
import styles from './Slider.module.scss'
//Компоненты
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { Page } from './Page'
import { SliderContext } from '../../context/SliderContext/SliderContext'

interface IProps {
    children: any
    type?: 'Single' | 'Multiple'
    slidesToShow?: number
    autoPlay?: boolean
}

const Slider: FC<IProps> & { Page: FC<{ children: ReactNode }> } = ({
    children,
    type = 'Single',
    slidesToShow = 1,
    autoPlay = false,
}) => {
    const [offset, setOffset] = useState(0)
    const windowRef = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        let autoplayInterval: NodeJS.Timeout
        if (autoPlay) {
            autoplayInterval = setInterval(handleOnNextClick, 3000)
        }
        if (windowRef.current) {
            setWidth(windowRef.current.clientWidth)
            windowRef.current.addEventListener('mouseenter', () => clearInterval(autoplayInterval))
            windowRef.current.addEventListener('mouseleave', () =>
                setInterval(handleOnNextClick, 3000)
            )
        }

        return () => clearInterval(autoplayInterval)
    }, [width])

    const handleOnNextClick = (): void => {
        setOffset((currentOffset) => {
            let newOffset = currentOffset - width / slidesToShow
            let maxOffset = -((width / slidesToShow) * (children.length - 1))
            if (newOffset < -(width * children.length - 1)) newOffset = 0
            return Math.max(newOffset, maxOffset)
        })
    }

    const handleOnPrevClick = (): void => {
        setOffset((currentOffset) => {
            let newOffset = currentOffset + width / slidesToShow
            if (newOffset > 0) newOffset = -(width * (children.length - 1))
            return Math.min(newOffset, 0)
        })
    }

    return (
        <SliderContext.Provider value={{ width, slidesToShow, type }}>
            <div className={styles.slider}>
                <div className={styles.window} ref={windowRef}>
                    <div className={styles.slides} style={{ transform: `translateX(${offset}px)` }}>
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
                    <button
                        onClick={handleOnNextClick}
                        disabled={
                            offset === -((width / slidesToShow) * children.length - width) &&
                            type === 'Multiple'
                        }
                    >
                        <GrFormNext size={30} />
                    </button>
                </div>
            </div>
        </SliderContext.Provider>
    )
}
Slider.Page = Page
export default Slider

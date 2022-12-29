import React, { FC, useEffect, useRef, useState } from 'react'
import { GrFormDown, GrFormUp } from 'react-icons/gr'
import styles from './Select.module.scss'
import { useOutside } from '@/hooks/useOutside'
import { IOption } from '@/components/UI/Select/Select.types'

interface IProps {
    options: IOption[]
    selected: IOption
    setSelected: (options: IOption) => void
}

const Select: FC<IProps> = ({ options, selected, setSelected }) => {
    const [isActive, setIsActive] = useState(false)
    const selectRef = useRef<HTMLDivElement>(null)
    const checkOutside = useOutside(selectRef)

    useEffect(() => {
        if (checkOutside) {
            setIsActive(false)
        }
    }, [checkOutside])

    const selectOption = (option: IOption) => {
        setSelected(option)
        setIsActive(false)
    }

    return (
        <div
            className={`${
                isActive ? `${styles.Select} ${styles.SelectActive}` : `${styles.Select}`
            } `}
            ref={selectRef}
        >
            <div className={styles.SelectTitle} onClick={() => setIsActive(!isActive)}>
                <span>{selected.label}</span>
                {!isActive ? <GrFormDown size={20} /> : <GrFormUp size={20} />}
            </div>
            {isActive ? (
                <div className={styles.SelectContent}>
                    <ul className={styles.SelectContentWrapper}>
                        {options.map((option) => (
                            <li onClick={() => selectOption(option)}>{option.label}</li>
                        ))}
                    </ul>
                </div>
            ) : null}
        </div>
    )
}

export default Select

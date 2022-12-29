import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'
import styles from './Dropdown.module.scss'
import { GrFormDown, GrFormUp } from 'react-icons/gr'
import Item from './Item'
import { useOutside } from '@/hooks/useOutside'

interface IProps {
    children: ReactNode
    title: string
    zIndex?: number
}

const Dropdown: FC<IProps> & { Item: FC<{ children: ReactNode }> } = ({
    children,
    title,
    zIndex,
}) => {
    const [isActive, setIsActive] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const checkOutside = useOutside(dropdownRef)

    useEffect(() => {
        if (checkOutside) {
            setIsActive(false)
        }
    }, [checkOutside])

    return (
        <div
            className={`${
                isActive ? `${styles.Dropdown} ${styles.DropdownActive}` : `${styles.Dropdown}`
            } `}
            ref={dropdownRef}
            style={{ zIndex }}
        >
            <div className={styles.DropdownTitle} onClick={() => setIsActive(!isActive)}>
                <span>{title}</span>
                {!isActive ? <GrFormDown size={20} /> : <GrFormUp size={20} />}
            </div>
            {isActive && (
                <div className={styles.DropdownContent}>
                    <div className={styles.DropdownContentWrapper}>{children}</div>
                </div>
            )}
        </div>
    )
}

Dropdown.Item = Item
export default Dropdown

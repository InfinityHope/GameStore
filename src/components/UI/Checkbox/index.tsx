import { ChangeEvent, FC } from 'react'
import styles from './Checkbox.module.scss'

interface IProps {
    value: string
    name: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    checked?: boolean
}

const Checkbox: FC<IProps> = ({ checked, value, name, onChange }) => {
    return (
        <label className={styles.Checkbox}>
            <input
                type="checkbox"
                name={name}
                value={value}
                onChange={onChange}
                checked={checked}
            />
            <span></span>
            <b>{name}</b>
        </label>
    )
}

export default Checkbox

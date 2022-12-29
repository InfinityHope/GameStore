import { ChangeEvent, FC } from 'react'
import styles from './Checkbox.module.scss'

interface IProps {
    value: string
    name: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Checkbox: FC<IProps> = ({ value, name, onChange }) => {
    return (
        <label className={styles.Checkbox}>
            <input type="checkbox" name={name} value={value} onChange={onChange} />
            <span></span>
            <b>{name}</b>
        </label>
    )
}

export default Checkbox

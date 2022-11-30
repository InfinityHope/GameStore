//Библиотеки
import { FC } from 'react'
//Стили
import styles from './SearchInput.module.scss'

const SearchInput: FC = () => {
    return (
        <div className={styles.Search}>
            <input type="text" />
            <button />
        </div>
    )
}

export default SearchInput

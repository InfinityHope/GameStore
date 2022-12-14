//Библиотеки
import { FC, useEffect, useState } from 'react'
//Стили
import styles from './SearchInput.module.scss'

const SearchInput: FC = () => {
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {}, [])

    return (
        <div className={styles.Search}>
            <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button />
        </div>
    )
}

export default SearchInput

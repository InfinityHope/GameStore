//Библиотеки
import { FC, useContext } from 'react'
//Стили
import styles from './SearchInput.module.scss'
import { SearchOverlayContext } from '@/context/SearchOverlayContext/SearchOverlayContext'

const SearchInput: FC = () => {
    const { searchTerm, changeSearchTerm, showOverlay } = useContext(SearchOverlayContext)

    const show = () => {
        showOverlay(true)
        document.body.style.overflow = 'hidden'
    }

    return (
        <div className={styles.Search}>
            <input
                type="text"
                value={searchTerm}
                onFocus={show}
                placeholder={'Поиск по играм...'}
                onChange={(e) => changeSearchTerm(e)}
            />
            <button />
        </div>
    )
}

export default SearchInput

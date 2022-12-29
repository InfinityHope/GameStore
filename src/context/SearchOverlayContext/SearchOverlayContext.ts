import { ChangeEvent, createContext } from 'react'

export const SearchOverlayContext = createContext({
    searchTerm: '',
    changeSearchTerm: (e: ChangeEvent<HTMLInputElement> | '') => {},
    activeOverlay: false,
    showOverlay: (value: boolean) => {},
})

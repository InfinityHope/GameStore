import { ChangeEvent, createContext } from 'react'
import { ISearchOverlayContext } from '@/context/SearchOverlayContext/SearchOverlay.types'

export const SearchOverlayContext = createContext<ISearchOverlayContext>({
    searchTerm: '',
    changeSearchTerm: (e: ChangeEvent<HTMLInputElement>) => {},
    activeOverlay: false,
    showOverlay: () => {},
})

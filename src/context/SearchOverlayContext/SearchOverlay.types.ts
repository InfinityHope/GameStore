import { ChangeEvent } from 'react'

export interface ISearchOverlayContext {
    searchTerm: string
    changeSearchTerm: (e: ChangeEvent<HTMLInputElement>) => void
    activeOverlay: boolean
    showOverlay: (value: boolean) => void
}

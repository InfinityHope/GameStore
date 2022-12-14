import { useAppSelector } from './useAppSelector'

export const useExistInFavourites = (id: string) => {
    const { favourites } = useAppSelector((state) => state.favourite)
    return favourites.some((favouriteItem) => favouriteItem.productId === id)
}

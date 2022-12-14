import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFavourite } from '../../models/favourite.models'

interface FavouriteState {
    favourites: IFavourite[]
}

const initialState: FavouriteState = {
    favourites: [],
}

const FavouriteSlice = createSlice({
    name: 'Favourite',
    initialState,
    reducers: {
        addFavourite: (state, action: PayloadAction<IFavourite>) => {
            const duplicate = state.favourites.find(
                (favourite) => favourite.productId === action.payload.productId
            )
            if (duplicate) {
                state.favourites = state.favourites.filter(
                    (favourite) => favourite.productId !== action.payload.productId
                )
            } else {
                state.favourites = [...state.favourites, action.payload]
            }
        },
    },
})

export const favouriteActions = FavouriteSlice.actions
export default FavouriteSlice.reducer

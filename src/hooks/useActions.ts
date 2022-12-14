import { useAppDispatch } from './useAppDispatch'
import { bindActionCreators } from '@reduxjs/toolkit'

import { cartActions } from '../redux/reducers/CartReducer'
import { authActions } from '../redux/reducers/AuthReducer'
import { favouriteActions } from '../redux/reducers/FavouriteReducer'

const allActions = {
    ...cartActions,
    ...authActions,
    ...favouriteActions,
}

export const useActions = () => {
    const dispatch = useAppDispatch()

    return bindActionCreators(allActions, dispatch)
}

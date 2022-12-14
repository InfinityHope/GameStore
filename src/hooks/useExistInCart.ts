import { useAppSelector } from './useAppSelector'

export const useExistInCart = (id: string | null) => {
    const { cartItems } = useAppSelector((state) => state.cart)
    return cartItems.some((cartItem) => cartItem.productId === id)
}

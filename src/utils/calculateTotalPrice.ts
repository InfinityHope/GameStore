import { ICartItem } from '@/models/cart.models'

export const calculateTotalPrice = (cartItems: ICartItem[]) => {
    return cartItems.reduce((sum, item) => item.price + sum, 0)
}

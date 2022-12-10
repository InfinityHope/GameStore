export interface ICartItem {
    productId: string
    title: string
    img: string
    price: number
}

export interface ICart {
    cartItems: ICartItem[]
    totalPrice: number
}

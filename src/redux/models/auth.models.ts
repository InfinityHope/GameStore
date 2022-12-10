export interface IAuth {
    token: string
    user: {
        _id: string
        email: string
    }
}

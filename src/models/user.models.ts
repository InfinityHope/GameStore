import { IProfileValues } from '../views/DataView/Profile.types'

export interface IUser {
    firstName: string
    nickName: string
    email: string
    totalGames: number
}
export interface IUpdateUser {
    _id: string
    data: IProfileValues
}

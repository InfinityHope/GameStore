//Библиотеки
import { PropsWithChildren } from 'react'
import { Navigate } from 'react-router'
//Хуки
import { useAppSelector } from '../redux/hooks/redux'

interface IProps {
    children: JSX.Element
}

const RequireAuth = ({ children }: PropsWithChildren<IProps>) => {
    const { authData } = useAppSelector((state) => state.auth)
    const isAuthenticated = !Boolean(JSON.stringify(authData) === '{}')

    if (!isAuthenticated) {
        return <Navigate to={'/'} />
    }

    return children
}

export default RequireAuth

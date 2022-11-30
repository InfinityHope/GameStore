//Библиотеки
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
//Стили
import styles from './ProfilePage.module.scss'
//Хуки
import { useAppDispatch, useAppSelector } from '../../redux/hooks/redux'
//Асинхронные функции
import {
    fetchUserData,
    getUserLibrary,
    getUserOrders,
} from '../../redux/reducers/UserReducer/asyncActions'
//Компоненты
import LayoutProfile from '../../Layouts/LayoutProfile'
import { Spinner } from '../../components'
import LayoutMain from '../../Layouts/LayoutMain'

const ProfilePage = () => {
    const { userData, isLoading } = useAppSelector((state) => state.user)
    const {
        token,
        user: { _id },
    } = useAppSelector((state) => state.auth.authData)

    const location = useLocation()

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUserData({ _id, token }))
        dispatch(getUserLibrary({ _id, token }))
        dispatch(getUserOrders({ _id, token }))
    }, [])

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <LayoutMain>
                    {location.pathname === '/profile' ? (
                        <LayoutProfile
                            _id={_id}
                            link={'/profile'}
                            label={userData.nickName}
                        >
                            <div className={styles.ProfileView}>
                                <h3>{userData.nickName}</h3>
                                <hr />
                                <ul>
                                    <li>
                                        <b>{userData.totalGames}</b>
                                        <span>Игр куплено</span>
                                    </li>
                                </ul>
                            </div>
                        </LayoutProfile>
                    ) : (
                        <Outlet context={_id} />
                    )}
                </LayoutMain>
            )}
        </>
    )
}

export default ProfilePage

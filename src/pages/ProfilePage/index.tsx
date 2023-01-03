//Библиотеки
import { Outlet, useLocation } from 'react-router'
//Стили
import styles from './ProfilePage.module.scss'
//Хуки
import { useAppSelector } from '@/hooks/useAppSelector'
//Компоненты
import LayoutProfile from '@/layouts/LayoutProfile'
import { Spinner } from '@/components'
import { useGetUserDataQuery } from '@/redux/api/userAPI/user.api'

const ProfilePage = () => {
    const { _id } = useAppSelector((state) => state.auth.authData.user)
    const { data: userData, isLoading } = useGetUserDataQuery(_id, {
        refetchOnMountOrArgChange: true,
    })

    const location = useLocation()

    return (
        <>
            {userData &&
                (location.pathname === '/profile' ? (
                    <LayoutProfile _id={_id} link={'/profile'} label={userData.nickName}>
                        {isLoading ? (
                            <Spinner />
                        ) : (
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
                        )}
                    </LayoutProfile>
                ) : (
                    <Outlet context={_id} />
                ))}
        </>
    )
}

export default ProfilePage

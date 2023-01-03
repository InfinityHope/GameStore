import styles from './MobileMenu.module.scss'
import { NavLink } from 'react-router-dom'
import { useContext, useEffect, useRef, useState } from 'react'
import { MobileMenuContext } from '@/context/MobileMenuContext/MobileMenuContext'
import { useOutside } from '@/hooks/useOutside'
import { AuthForm, Tabs } from '@/components'
import { Button } from '@/components/UI'
import { useLocation } from 'react-router'
import { useAppSelector } from '@/hooks/useAppSelector'

const MobileMenu = () => {
    const { activeMenu, showMobileMenu } = useContext(MobileMenuContext)
    const { authData } = useAppSelector((state) => state.auth)
    const mobileMenuRef = useRef<HTMLDivElement>(null)
    const location = useLocation()
    const checkOutside = useOutside(mobileMenuRef)
    const [authLink, setAuthLink] = useState(false)

    useEffect(() => {
        if (activeMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
            setAuthLink(false)
        }
    }, [activeMenu])

    useEffect(() => {
        if (location.pathname.includes('/')) {
            showMobileMenu(false)
        }
    }, [location.pathname])

    useEffect(() => {
        if (checkOutside) {
            showMobileMenu(false)
        }
    }, [checkOutside])

    return (
        <>
            {activeMenu ? (
                <div className={styles.MobileMenu} ref={mobileMenuRef}>
                    <button onClick={() => showMobileMenu(false)}>&#10006;</button>
                    {authLink ? (
                        <Tabs
                            tabsClass={styles.MobileMenuTabs}
                            activeTabClass={styles.activeTab}
                            contentTabClass={'px-4'}
                            tabs={[
                                {
                                    name: 'Вход',
                                    content: <AuthForm type={'Login'} />,
                                },
                                {
                                    name: 'Регистрация',
                                    content: <AuthForm type={'Register'} />,
                                },
                            ]}
                        />
                    ) : (
                        <div className={styles.MobileMenuContainer}>
                            {authData.token ? (
                                <button>
                                    <NavLink to={`/profile`} state={{ id: authData.user._id }}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-name="Layer 1"
                                            viewBox="0 0 29 29"
                                            width="30"
                                            height="30"
                                        >
                                            <path
                                                fill="#FFF"
                                                d="M14.5 2A12.514 12.514 0 0 0 2 14.5 12.521 12.521 0 0 0 14.5 27a12.5 12.5 0 0 0 0-25Zm7.603 19.713a8.48 8.48 0 0 0-15.199.008A10.367 10.367 0 0 1 4 14.5a10.5 10.5 0 0 1 21 0 10.368 10.368 0 0 1-2.897 7.213ZM14.5 7a4.5 4.5 0 1 0 4.5 4.5A4.5 4.5 0 0 0 14.5 7Z"
                                            />
                                        </svg>
                                    </NavLink>
                                </button>
                            ) : (
                                <Button type={'Header'} onClick={() => setAuthLink(true)}>
                                    Войти
                                </Button>
                            )}

                            <ul>
                                <li>
                                    <NavLink to={'/catalog'}>Каталог</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/favourite'}>Избранное</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/cart'}>Корзина</NavLink>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            ) : null}
        </>
    )
}

export default MobileMenu

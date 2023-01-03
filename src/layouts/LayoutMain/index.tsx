//Библиотеки
import { ChangeEvent, FC, ReactNode, useState } from 'react'
//Стили
import styles from './Layout.module.scss'
//Контекст
import { SidebarContext } from '@/context/SidebarContext/SidebarContext'
import { SearchOverlayContext } from '@/context/SearchOverlayContext/SearchOverlayContext'
//Компоненты
import { Footer, Header, MobileMenu, SearchOverlay, Sidebar } from '@/components'
import { MobileMenuContext } from '@/context/MobileMenuContext/MobileMenuContext'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    const [activeSidebar, setActiveSidebar] = useState(false)
    const [activeOverlay, setActiveOverlay] = useState(false)
    const [activeMenu, setActiveMenu] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const changeSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    const showMobileMenu = (value: boolean) => {
        setActiveMenu(value)
    }

    const showSidebar = (value: boolean) => {
        setActiveSidebar(value)
    }

    const showOverlay = (value: boolean) => {
        setActiveOverlay(value)
    }

    return (
        <SidebarContext.Provider value={{ activeSidebar, showSidebar }}>
            <MobileMenuContext.Provider value={{ activeMenu, showMobileMenu }}>
                <SearchOverlayContext.Provider
                    value={{ activeOverlay, showOverlay, changeSearchTerm, searchTerm }}
                >
                    <div className={styles.layout}>
                        <MobileMenu />
                        <SearchOverlay />
                        <Sidebar />
                        <Header />
                        <div className={'flex-auto'}>{children}</div>
                        <Footer />
                    </div>
                </SearchOverlayContext.Provider>
            </MobileMenuContext.Provider>
        </SidebarContext.Provider>
    )
}

export default Layout

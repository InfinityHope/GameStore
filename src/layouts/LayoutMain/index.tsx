//Библиотеки
import { ChangeEvent, FC, ReactNode, useState } from 'react'
//Стили
import styles from './Layout.module.scss'
//Контекст
import { SidebarContext } from '@/context/SidebarContext/SidebarContext'
import { SearchOverlayContext } from '@/context/SearchOverlayContext/SearchOverlayContext'
//Компоненты
import { Footer, Header, Sidebar } from '@/components'
import SearchOverlay from '@/components/SearchOverlay/SearchOverlay'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    const [activeSidebar, setActiveSidebar] = useState(false)
    const [activeOverlay, setActiveOverlay] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const changeSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    const showSidebar = () => {
        setActiveSidebar(!activeSidebar)
    }

    const showOverlay = (value: boolean) => {
        setActiveOverlay(value)
    }

    return (
        <SidebarContext.Provider value={{ activeSidebar, showSidebar }}>
            <SearchOverlayContext.Provider
                value={{ activeOverlay, showOverlay, changeSearchTerm, searchTerm }}
            >
                <div className={styles.layout}>
                    <SearchOverlay />
                    <Sidebar />
                    <Header />
                    <div className={'flex-auto'}>{children}</div>
                    <Footer />
                </div>
            </SearchOverlayContext.Provider>
        </SidebarContext.Provider>
    )
}

export default Layout

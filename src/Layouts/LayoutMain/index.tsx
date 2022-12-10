//Библиотеки
import { FC, ReactNode, useState } from 'react'
//Стили
import styles from './Layout.module.scss'
//Контекст
import { SidebarContext } from '../../context/SidebarContext/SidebarContext'
//Компоненты
import { Footer, Header, Sidebar } from '../../components'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    const [activeSidebar, setActiveSideBar] = useState(false)

    const showSidebar = () => {
        setActiveSideBar(!activeSidebar)
    }

    return (
        <SidebarContext.Provider value={{ activeSidebar, showSidebar }}>
            <div className={styles.layout}>
                <Sidebar />
                <Header />
                {children}
                <Footer />
            </div>
        </SidebarContext.Provider>
    )
}

export default Layout

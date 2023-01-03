//Библиотеки
import { FC, useContext, useEffect, useRef } from 'react'
//Стили
import styles from './Sidebar.module.scss'
//Контекст
import { SidebarContext } from '@/context/SidebarContext/SidebarContext'
//Компоненты
import { AuthForm, Tabs } from '@/components'

const Sidebar: FC = () => {
    const { activeSidebar, showSidebar } = useContext(SidebarContext)
    const sidebarRef = useRef<HTMLDivElement>(null)

    const toggleSidebar = (event: MouseEvent) => {
        const target = event.target as HTMLDivElement

        if (target.contains(sidebarRef.current) && target !== sidebarRef.current && activeSidebar) {
            showSidebar(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', toggleSidebar)

        return () => {
            document.removeEventListener('click', toggleSidebar)
        }
    }, [activeSidebar])

    return (
        <div
            className={`${styles.Sidebar} ${
                activeSidebar ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
        >
            <div ref={sidebarRef}>
                <Tabs
                    tabsClass={styles.SidebarTabs}
                    activeTabClass={styles.activeTab}
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
            </div>
        </div>
    )
}

export default Sidebar

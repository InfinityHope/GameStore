//Библиотеки
import { FC, useState } from 'react'
//Стили
import styles from './Tabs.module.scss'
//Типы
import { ITab } from './Tabs.types'

interface IProps {
    tabs: ITab[]
    type: 'SidebarTabs' | 'Default'
}

const Tabs: FC<IProps> = ({ tabs, type }) => {
    const [activeTabIndex, setActiveTabIndex] = useState<number>(0)

    const toggleTab = (index: number): void => {
        setActiveTabIndex(index)
    }

    return (
        <div className={styles.tabsWrapper}>
            <ul
                className={`${
                    type === 'SidebarTabs' ? styles.SidebarTabs : styles.Default
                }`}
            >
                {Object.keys(tabs).length === 0 ? (
                    <div>No Tabs</div>
                ) : (
                    <>
                        {tabs.map((tab: ITab, index: number) => {
                            return (
                                <li
                                    key={index}
                                    className={
                                        index === activeTabIndex
                                            ? styles.activeTab
                                            : ''
                                    }
                                    onClick={() => toggleTab(index)}
                                >
                                    {tab.name}
                                </li>
                            )
                        })}
                    </>
                )}
            </ul>
            <div className={styles.tabsContent}>
                {tabs[activeTabIndex].content}
            </div>
        </div>
    )
}

export default Tabs

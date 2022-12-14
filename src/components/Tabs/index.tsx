//Библиотеки
import { FC, useState } from 'react'
//Стили
import styles from './Tabs.module.scss'
//Типы
import { ITab } from './Tabs.types'

interface IProps {
    tabs: ITab[]
    contentTabClass?: string
    tabsClass?: string
    activeTabClass?: string
}

const Tabs: FC<IProps> = ({ tabs, contentTabClass, tabsClass, activeTabClass }) => {
    const [activeTabIndex, setActiveTabIndex] = useState<number>(0)

    const toggleTab = (index: number): void => {
        setActiveTabIndex(index)
    }

    return (
        <div className={styles.tabsWrapper}>
            <ul className={`${tabsClass ? tabsClass : styles.TabsHeader}`}>
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
                                            ? activeTabClass
                                                ? activeTabClass
                                                : styles.activeTab
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
            <div className={contentTabClass ? contentTabClass : styles.tabsContent}>
                {tabs[activeTabIndex].content}
            </div>
        </div>
    )
}

export default Tabs

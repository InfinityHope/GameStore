//Библиотеки
import { createContext } from 'react'
//Типы
import { ISidebarContext } from './SidebarContext.types'

export const SidebarContext = createContext<ISidebarContext>({
    activeSidebar: false,
})

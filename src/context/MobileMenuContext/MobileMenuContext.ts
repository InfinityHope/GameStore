import { createContext } from 'react'
import { IMobileMenuContext } from '@/context/MobileMenuContext/MobileMenu.types'

export const MobileMenuContext = createContext<IMobileMenuContext>({
    activeMenu: false,
    showMobileMenu: (value) => {},
})

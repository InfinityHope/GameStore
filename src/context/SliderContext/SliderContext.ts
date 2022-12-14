import { createContext } from 'react'
import { ISliderContext } from './SliderContext.types'

export const SliderContext = createContext<ISliderContext>({
    width: 100,
    slidesToShow: 1,
    type: 'Single',
    slideOffset: 0,
})

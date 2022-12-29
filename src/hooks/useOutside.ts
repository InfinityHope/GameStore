import { RefObject, useEffect, useState } from 'react'

export const useOutside = (ref: RefObject<HTMLElement>) => {
    const [outside, setOutside] = useState<Boolean>(false)
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                setOutside(true)
            } else {
                setOutside(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref])

    return outside
}

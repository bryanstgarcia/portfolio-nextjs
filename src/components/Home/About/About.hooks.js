import { useState } from 'react'

export const useSeeMore = () => {
    const [ seeMore, setSeeMore ] = useState(false)
    const handleToggle = () => {
        setSeeMore(!seeMore)
    }
    return { seeMore, toggle: handleToggle}
}
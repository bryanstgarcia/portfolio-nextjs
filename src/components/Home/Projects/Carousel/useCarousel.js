import { useState, useRef, useEffect } from 'react'

export const useCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [totalDots, setTotalDots] = useState(0)
    const scrollContainerRef = useRef(null)
    
    const scrollToNext = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current
            const firstChild = container.firstElementChild
            if (firstChild) {
                const cardWidth = firstChild.offsetWidth
                const gap = 16 // 4 * 4px (gap-4 in Tailwind)
                const scrollAmount = cardWidth + gap
                
                // Check if we can scroll by the full amount
                const maxScrollLeft = container.scrollWidth - container.offsetWidth
                const currentScrollLeft = container.scrollLeft
                const nextScrollLeft = currentScrollLeft + scrollAmount
                
                if (nextScrollLeft >= maxScrollLeft) {
                    // Scroll to the very end
                    container.scrollTo({ left: maxScrollLeft, behavior: 'smooth' })
                } else {
                    // Scroll by one card
                    container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
                }
            }
        }
    }
    
    const scrollToPrevious = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current
            const firstChild = container.firstElementChild
            if (firstChild) {
                const cardWidth = firstChild.offsetWidth
                const gap = 16 // 4 * 4px (gap-4 in Tailwind)
                const scrollAmount = cardWidth + gap
                
                const currentScrollLeft = container.scrollLeft
                const prevScrollLeft = currentScrollLeft - scrollAmount
                
                if (prevScrollLeft <= 0) {
                    // Scroll to the very beginning
                    container.scrollTo({ left: 0, behavior: 'smooth' })
                } else {
                    // Scroll by one card
                    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
                }
            }
        }
    }
    
    const scrollToDot = (dotIndex) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current
            const firstChild = container.firstElementChild
            if (firstChild) {
                const cardWidth = firstChild.offsetWidth
                const gap = 16 // 4 * 4px (gap-4 in Tailwind)
                const scrollAmount = cardWidth + gap
                
                // Calculate the target scroll position
                let targetScrollLeft = scrollAmount * dotIndex
                
                // Ensure we don't scroll beyond the maximum
                const maxScrollLeft = container.scrollWidth - container.offsetWidth
                targetScrollLeft = Math.min(targetScrollLeft, maxScrollLeft)
                
                container.scrollTo({ left: targetScrollLeft, behavior: 'smooth' })
            }
        }
    }
    
    useEffect(() => {
        const container = scrollContainerRef.current
        if (container) {
            // Calculate total dots based on card width and container width
            const firstChild = container.firstElementChild
            if (firstChild) {
                const cardWidth = firstChild.offsetWidth
                const gap = 16 // 4 * 4px (gap-4 in Tailwind)
                const containerWidth = container.offsetWidth
                const scrollAmount = cardWidth + gap
                
                // Calculate how many cards can be scrolled through
                const totalScrollableWidth = container.scrollWidth - containerWidth
                const dots = Math.ceil(totalScrollableWidth / scrollAmount) + 1
                setTotalDots(dots)
                
                // Add scroll event listener to update current index
                const handleScroll = () => {
                    const scrollLeft = container.scrollLeft
                    const newIndex = Math.round(scrollLeft / scrollAmount)
                    setCurrentIndex(Math.min(newIndex, dots - 1))
                }
                
                container.addEventListener('scroll', handleScroll)
                return () => container.removeEventListener('scroll', handleScroll)
            }
        }
    }, [])
    
    return {
        scrollContainerRef,
        scrollToNext,
        scrollToPrevious,
        scrollToDot,
        currentIndex,
        totalDots
    }
}

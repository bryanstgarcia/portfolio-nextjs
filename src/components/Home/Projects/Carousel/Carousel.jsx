"use client";

import styles from "./style.module.css";
import { useCarousel } from "./useCarousel.js";

import { Container } from "@app/components/shared/Container/Container";
export function Carousel({ children }) {
    const {
        scrollContainerRef,
        scrollToNext,
        scrollToPrevious,
        scrollToDot,
        currentIndex,
        totalDots,
    } = useCarousel();

    return (
        <div className="w-full">
            <Container className="flex w-full flex-row justify-between items-center px-4 md:px-10">
                <button
                    onClick={scrollToPrevious}
                    className="cursor-pointer px-4 md:px-2 py-2 md:py-1 bg-darkp-400 text-lg md:text-3xl  active:bg-orangep-500 hover:bg-orangep-500 text-whitep-500 rounded-lg transition-colors duration-200 font-medium"
                    aria-label="Previous projects"
                >
                    ← <span className="w-0 text-[0.0001rem] text-darkp-500">Previous</span>
                </button>
                <button
                    onClick={scrollToNext}
                    className="cursor-pointer px-4 md:px-2 py-2 md:py-1 bg-darkp-400 text-lg md:text-3xl active:bg-orangep-500  hover:bg-orangep-500 text-whitep-500 rounded-lg transition-colors duration-200 font-medium"
                    aria-label="Next projects"
                >
                    <span className="w-0 text-[0.0001rem] text-darkp-500">Next</span> →
                </button>
            </Container>
            <div className="relative flex justify-start items-center overflow-x-hidden overflow-y-visible pt-3 w-full">
                <div
                    ref={scrollContainerRef}
                    className={`relative overflow-x-auto  overflow-y-visible flex gap-4 snap-x scroll-p-4 md:scroll-px-10 pt-15 md:pt-15 ${styles.noScrollbar}`}
                >
                    {children}
                </div>
            </div>
            {/* Dot Indicators */}
            {totalDots > 1 && (
                <div className="flex justify-center items-center gap-2 md:mt-10">
                    {Array.from({ length: totalDots }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToDot(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
                                index === currentIndex
                                    ? "bg-orangep-500 scale-110"
                                    : "bg-whitep-500 hover:bg-amber-500"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

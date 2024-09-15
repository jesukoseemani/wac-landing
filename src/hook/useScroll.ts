import { ScrollDirection } from "@/components/WorksBox";
import { useRef, useState, useEffect } from "react";



// Define the state type for scroll
interface ScrollState {
    side: ScrollDirection;
}

// Custom hook to handle horizontal scrolling
const useScroll = (scrollRef: React.RefObject<HTMLDivElement>) => {
    const [scrollX, setScrollX] = useState<ScrollState>({
        side: "",
    });

    const handleScroll = (data: { side: ScrollDirection }) => {
        setScrollX({ side: data.side });
    };

    useEffect(() => {
        const scrollContainer = scrollRef.current;

        if (!scrollContainer) return; // Return early if ref is not attached

        const maxScrollLeft =
            scrollContainer.scrollWidth - scrollContainer.clientWidth; // Calculate max scroll width
        const currentScrollLeft = scrollContainer.scrollLeft;

        if (scrollX.side === "right" && currentScrollLeft < maxScrollLeft) {
            scrollContainer.scrollLeft = Math.min(
                currentScrollLeft + 200,
                maxScrollLeft
            ); // Ensure we don't scroll past the right boundary
        } else if (scrollX.side === "left" && currentScrollLeft > 0) {
            scrollContainer.scrollLeft = Math.max(currentScrollLeft - 200, 0); // Ensure we don't scroll past the left boundary
        }
    }, [scrollX, scrollRef]);

    return handleScroll;
};

export default useScroll;

import { useEffect, useState } from "react";

export default function useScreenSize(screenSize) {
    // For small screen size
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= screenSize);

    // Update state on screen resize
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= screenSize);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [screenSize]);

    return isSmallScreen
}
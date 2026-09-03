import { useEffect, useState } from "react";

export default function useScreenSize(screenSize: number) {
  // For small screen size
  const [isSmallScreen, setIsSmallScreen] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= screenSize : false,
  );

  // Update state on screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(
        typeof window !== "undefined" ? window.innerWidth <= screenSize : false,
      );
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenSize]);

  return isSmallScreen;
}

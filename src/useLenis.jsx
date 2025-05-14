import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const useLenis = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    lenisRef.current = new Lenis({
      duration: 1.5,
      // easing: (t) => t * (2 - t),
      // direction: "vertical",
      // smoothWheel: true,
    });

    const onScroll = (time) => {
      lenisRef.current.raf(time);
      requestAnimationFrame(onScroll);
    };

    requestAnimationFrame(onScroll);

    // Cleanup on component unmount
    return () => {
      lenisRef.current.destroy();
    };
  }, []);

  return lenisRef;
};

export default useLenis;

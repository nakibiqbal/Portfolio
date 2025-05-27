import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, // lower = smoother
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])


  return;
};

export default useLenis;

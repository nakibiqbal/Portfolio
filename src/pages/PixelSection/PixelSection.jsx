import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./PixelSection.css";
import PixelContent from "./PixelContent";
import useStateHook from "../../hooks/CustomStateHook/useStateHook";

const PixelSection = () => {
  const { boxCount } = useStateHook();
  const mainRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["end end", "end center"],
  })
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section
      style={{
        height: "100vh",
        width: "100%,",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
      ref={mainRef}
    >
      {/* Hover grid */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100vw",
          height: "100vh",
          position: "absolute",
        }}
      >
        {Array.from({ length: boxCount }).map((_, index) => (
          <motion.div
            key={index}
            onHoverStart={(e) => {
              e.target.style.backgroundColor = "#ffffff";
              setTimeout(() => {
                e.target.style.backgroundColor = "transparent";
              }, 250);
            }}
            className="pixelDiv"
          />
        ))}
      </div>

      {/* Content overlay */}
      <PixelContent opacity={opacity} />
    </section>
  );
};

export default PixelSection;

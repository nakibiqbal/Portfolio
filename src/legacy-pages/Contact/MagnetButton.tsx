/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { motion } from "framer-motion";

type MagnetButtonProps = {
  children: React.ReactNode;
};

export default function MagnetButton({ children }: MagnetButtonProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };
  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      animate={{ x, y }}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      ref={ref}
      className="Icons"
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

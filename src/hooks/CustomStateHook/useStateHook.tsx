import { useState } from "react";

type ModalState = {
  active: boolean;
  index: number;
};

export default function useStateHook() {
  // for navbar
  const [isClick, setIsClick] = useState(false);
  // for section 6
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);
  // for section 3
  const [modal, setModal] = useState<ModalState>({ active: false, index: 0 });

  // for section 6
  const [shadowPos, setShadowPos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (
    e: React.MouseEvent<HTMLElement>,
    cardId: number,
  ) => {
    const cardElement = e.currentTarget as HTMLElement;
    const { left, top, width, height } = cardElement.getBoundingClientRect();

    // Get cursor position relative to the center of the card
    const centerX = width / 2;
    const centerY = height / 2;
    const x = e.clientX - left - centerX;
    const y = e.clientY - top - centerY;

    // Calculate tilt
    const tiltX = (y / centerY) * 30;
    const tiltY = (x / centerX) * -30;

    cardElement.style.transform = `perspective(1000px) rotateY(${tiltY}deg) rotateX(${tiltX}deg)`;

    // Calculate cursor position relative to the card's center
    const posX = e.clientX - left;
    const posY = e.clientY - top;

    setShadowPos({ x: posX, y: posY });
    setHoveredCardId(cardId);
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const cardElement = e.currentTarget as HTMLElement;
    cardElement.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
    setHoveredCardId(null);
  };

  return {
    isClick,
    setIsClick,
    hoveredCardId,
    shadowPos,
    handleMouseMove,
    handleMouseLeave,
    modal,
    setModal,
  };
}

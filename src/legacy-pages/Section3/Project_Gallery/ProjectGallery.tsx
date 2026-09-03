/* eslint-disable react/prop-types */
import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import "./ProjectGallery.css";

type ProjectItem = {
  id: number;
  img: string;
  label: string;
  link: string;
};

type ProjectGalleryProps = {
  list: ProjectItem[];
  modal: { active: boolean; index: number };
  hoverEl: React.RefObject<HTMLDivElement | null>;
};

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.6, ease: [0.87, 0, 0.13, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.6, ease: [0.87, 0, 0.13, 1] },
  },
};

const ProjectGallery = ({ list, modal, hoverEl }: ProjectGalleryProps) => {
  const { active, index } = modal;
  const parentBG = useRef<HTMLDivElement | null>(null);
  const galleryContainer = useRef<HTMLDivElement | null>(null);
  const viewCursorBG = useRef<HTMLDivElement | null>(null);
  const viewCursorTxt = useRef<HTMLParagraphElement | null>(null);

  useGSAP(
    () => {
      //Move Parent Background
      let xMoveParent = gsap.quickTo(parentBG.current, "left", {
        duration: 0.6,
        ease: "power3",
      });
      let yMoveParent = gsap.quickTo(parentBG.current, "top", {
        duration: 0.6,
        ease: "power3",
      });
      //Move Container
      let xMoveContainer = gsap.quickTo(galleryContainer.current, "left", {
        duration: 0.5,
        ease: "power3",
      });
      let yMoveContainer = gsap.quickTo(galleryContainer.current, "top", {
        duration: 0.5,
        ease: "power3",
      });
      // Move Viewing Cursor Bg
      let xCursorMoveBG = gsap.quickTo(viewCursorBG.current, "left", {
        duration: 0.4,
        ease: "power3",
      });
      let yCursorMoveBG = gsap.quickTo(viewCursorBG.current, "top", {
        duration: 0.4,
        ease: "power3",
      });
      // Move Viewing Cursor Txt
      let xCursorMoveTxt = gsap.quickTo(viewCursorTxt.current, "left", {
        duration: 0.3,
        ease: "power3",
      });
      let yCursorMoveTxt = gsap.quickTo(viewCursorTxt.current, "top", {
        duration: 0.3,
        ease: "power3",
      });

      const hoverArea = hoverEl.current;
      if (!hoverArea) return;

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        xMoveParent(clientX);
        yMoveParent(clientY);
        xMoveContainer(clientX);
        yMoveContainer(clientY);
        xCursorMoveBG(clientX);
        yCursorMoveBG(clientY);
        xCursorMoveTxt(clientX);
        yCursorMoveTxt(clientY);
      };

      hoverArea.addEventListener("mousemove", handleMouseMove);

      return () => {
        hoverArea.removeEventListener("mousemove", handleMouseMove);
      };
    },
    { scope: galleryContainer },
  );

  return (
    <>
      <motion.div
        ref={parentBG}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="parentBG"
      />

      <motion.div
        ref={galleryContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="galleryContainer"
      >
        <div style={{ top: index * -100 + "%" }} className="gallerySlider">
          {list.map(({ img }, index: number) => {
            return (
              <div key={index} className="galleryImages">
                <img src={img} alt="PROJECT GALLERY" loading="lazy" />
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        ref={viewCursorBG}
        className="viewCursorBG"
      />
      <motion.p
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        ref={viewCursorTxt}
        className="viewCursorTxt"
      >
        View
      </motion.p>
    </>
  );
};

export default ProjectGallery;

import { useRef, useState } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import ProjectGallery from "./Project_Gallery/ProjectGallery";
import ProjectContent from "./Project_Content/ProjectContent";
import "./section3.css";
import { ListData } from "./ListData";
import bg2 from "../../assets/bg2.png"
import bg3 from "../../assets/bg3.png"
import useScreenSize from "../../hooks/ScreenSizeHook/useScreenSize";
import useStateHook from "../../hooks/CustomStateHook/useStateHook";

function Section3() {
  const [list] = useState(ListData);
  const isSmallScreen = useScreenSize(982);

  const secRef = useRef(null);
  const hoverEl = useRef(null);
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-200, isSmallScreen ? 3500 : 700])
  const yReverse = useTransform(scrollYProgress, [0, 1], [isSmallScreen ? 3000 : 600, isSmallScreen ? -1000 : -1000])
  const hue = useTransform(scrollYProgress, [0, 1], [isSmallScreen ? 200 : 150, isSmallScreen ? 50 : 80])
  const rotate = useTransform(scrollYProgress, [0, 1], [360, -360])

  // MotionTemplate used because hue will be gone to a string.
  const filter = useMotionTemplate`hue-rotate(${hue}deg)`;

  const { modal, setModal } = useStateHook()

  return (
    <>
      <section ref={secRef} id="image_reveal">

        <motion.div style={{ y }} className="imgBgThreeParent">
          <motion.img style={{ filter }} src={bg2} className="bgImgThree" alt="Background" />
        </motion.div>
        <motion.div style={{ y: yReverse }} className="imgBgFourParent">
          <motion.img style={{ rotate }} src={bg3} className="bgImgFour" alt="Background" />
        </motion.div>

        <div ref={hoverEl} className="section3Content">
          <ProjectContent setModal={setModal} list={list} hoverEl={hoverEl} />
        </div>

        <ProjectGallery list={list} modal={modal} hoverEl={hoverEl} />

      </section>
    </>
  );
}

export default Section3;

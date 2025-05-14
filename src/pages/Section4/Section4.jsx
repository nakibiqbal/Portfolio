import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Images from "./Images";
import "./section4.css";
import "./images.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section4 = () => {
  const parentRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: parentRef, offset: ["start 20%", "end 110%"] });
  const y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <section ref={parentRef} id="section4">

      <div className="imageWrapper">

        <Images />

        <motion.div style={{ y }} className="texts">

          <p>
            Creating meaningful and interactive web experiences is at the heart of what I do. As a frontend developer, I enjoy building visually engaging interfaces with smooth user experiences using modern technologies like React and animation libraries. I care deeply about clean design, performance, and making every interaction feel intuitive and enjoyable.
            <br />
            <br />
            I truly believe that to build something awesome, the environment plays a key role. A positive and inspiring atmosphere can elevate our mindset — and that’s when the real magic happens.
            <br />
            <br />
            Outside of coding, I enjoy traveling, exploring new ideas, watching food and travel vlogs, sleeping, and taking time to relax. These moments recharge my creativity and keep me inspired.
          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default Section4;


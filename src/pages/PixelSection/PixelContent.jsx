/* eslint-disable react/prop-types */
import { AiFillOpenAI } from "react-icons/ai";
import { motion } from "framer-motion";

const PixelContent = ({ opacity }) => {
  return (
    <motion.div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        textAlign: "center",
        pointerEvents: "none",
        overflow: "hidden",
        opacity
      }}
    >
      <iframe
        src="https://giphy.com/embed/npY8OaCJcdGvBw2GtM"
        style={{ border: "none", zIndex: 1 }}
        title="animation"
        className="iframe"
      ></iframe>
      <h1 className="name">$ NAKIB IQBAL JOARDER $</h1>
      <h1 className="name">FRONTEND REACT.JS</h1>
      <h1 className="developer">
        <AiFillOpenAI className="aiLeft" />
        DEVELOPER
        <AiFillOpenAI className="aiRight" />
      </h1>
      <h1 className="name">I LOVE WORKING ON</h1>
      <h1 className="name">COMPLEX WEB ANIMATION&apos;S</h1>
      <h1 className="name">___OCTOBER, 2024___</h1>
    </motion.div>
  );
};

export default PixelContent;

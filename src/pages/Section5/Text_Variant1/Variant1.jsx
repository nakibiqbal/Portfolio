/* eslint-disable react/prop-types */
import { useRef } from "react";
import { motion } from "framer-motion";
import "./Variant1.css";

const TextAnim1 = ({ text, repeatDelay, delay }) => {
    const textRef = useRef(null);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.05,
                delay: 1.4,
            }}
            className="forText" ref={textRef}>
            {
                text.split("").map((word, wordIndex) => (
                    <motion.p
                        initial={{ opacity: [0, 0, 0, 0, 0, 0, 1], }}
                        animate={{ opacity: [1, 1, 1, 1, 1, 1, 0], }}
                        transition={{
                            duration: 0.2,
                            delay: delay + (wordIndex * 0.02),
                            repeat:
                                Infinity,
                            repeatType: "loop",
                            repeatDelay: repeatDelay,
                        }}
                        key={wordIndex} >
                        {word}
                    </motion.p>
                ))
            }
        </motion.div>
    );
};

const Variant1 = ({ text }) => {
    return (
        <div className="variant1">
            <TextAnim1 text={text} repeatDelay={0.85} delay={0.2} />
            <TextAnim1 text={text} repeatDelay={0.85} delay={0.4} />
            <TextAnim1 text={text} repeatDelay={0.85} delay={0.6} />
            <TextAnim1 text={text} repeatDelay={0.85} delay={0.8} />
            <TextAnim1 text={text} repeatDelay={0.85} delay={1} />
        </div>
    )
}

export default Variant1

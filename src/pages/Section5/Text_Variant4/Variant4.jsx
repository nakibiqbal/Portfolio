/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import "./Variant4.css";

const TextAnim4 = ({ text, delay, duration }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.05,
                delay: 0.5,
            }}
            className='forText txt4'>
            {
                text.split("").map((word, wordIndex) => (
                    <motion.p
                        initial={{ opacity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1], }}
                        animate={{ opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0], }}
                        transition={{
                            duration: duration,
                            delay: delay + (wordIndex * 0.02),
                            repeat:
                                Infinity,
                            repeatType: "loop",
                            repeatDelay: 1,
                        }}
                        key={wordIndex} >
                        {word}
                    </motion.p>
                ))
            }
        </motion.div>
    );
};

const Variant4 = ({ text, duration }) => {

    return (
        <div className="variant4">

            <div className="variant4_child">
                <TextAnim4 text={text} duration={duration} delay={0} />
                <TextAnim4 text={text} duration={duration} delay={0.1} />
                <TextAnim4 text={text} duration={duration} delay={0.2} />
                <TextAnim4 text={text} duration={duration} delay={0.3} />
                <TextAnim4 text={text} duration={duration} delay={0.4} />
                <TextAnim4 text={text} duration={duration} delay={0.5} />
                <TextAnim4 text={text} duration={duration} delay={0.6} />
                <TextAnim4 text={text} duration={duration} delay={0.7} />
                <TextAnim4 text={text} duration={duration} delay={0.8} />
                <TextAnim4 text={text} duration={duration} delay={0.9} />
            </div>

        </div>
    );
};

export default Variant4;

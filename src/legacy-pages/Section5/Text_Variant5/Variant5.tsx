/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import "./Variant5.css";

type TextAnim5Props = {
  text: string;
  delay: number;
  repeatDelay: number;
  staggerDelay: number;
};

type Variant5Props = {
  text: string;
};

const TextAnim5 = ({
  text,
  delay,
  repeatDelay,
  staggerDelay,
}: TextAnim5Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.05,
        delay: 1.4,
      }}
      className="forText txt5"
    >
      {text.split("").map((word: string, wordIndex: number) => (
        <motion.p
          initial={{ opacity: [0, 1] }}
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.5,
            delay: delay - wordIndex * staggerDelay,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: repeatDelay,
          }}
          key={wordIndex}
        >
          {word}
        </motion.p>
      ))}
    </motion.div>
  );
};

const Variant5 = ({ text }: Variant5Props) => {
  return (
    <div className="variant5">
      <div className="variant5_child">
        <TextAnim5
          text={text}
          repeatDelay={1}
          delay={0.1}
          staggerDelay={0.04}
        />
        <TextAnim5
          text={text}
          repeatDelay={1}
          delay={0.2}
          staggerDelay={0.04}
        />
        <TextAnim5
          text={text}
          repeatDelay={1}
          delay={0.3}
          staggerDelay={0.04}
        />
        <TextAnim5
          text={text}
          repeatDelay={1}
          delay={0.4}
          staggerDelay={0.04}
        />
        <TextAnim5
          text={text}
          repeatDelay={1}
          delay={0.5}
          staggerDelay={0.04}
        />
        <TextAnim5
          text={text}
          repeatDelay={1}
          delay={0.6}
          staggerDelay={0.04}
        />
        <TextAnim5
          text={text}
          repeatDelay={1}
          delay={0.7}
          staggerDelay={0.04}
        />
        <TextAnim5
          text={text}
          repeatDelay={1}
          delay={0.8}
          staggerDelay={0.04}
        />
        <TextAnim5
          text={text}
          repeatDelay={1}
          delay={0.9}
          staggerDelay={0.04}
        />
        <TextAnim5 text={text} repeatDelay={1} delay={1} staggerDelay={0.04} />
      </div>
    </div>
  );
};

export default Variant5;

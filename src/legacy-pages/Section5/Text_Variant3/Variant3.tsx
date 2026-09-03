/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import "./Variant3.css";

type TextAnim3Props = {
  text: string;
  delay: number;
};

type Variant3Props = {
  text: string;
};

const TextAnim3 = ({ text, delay }: TextAnim3Props) => {
  const letters = text.split("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.05,
        delay: 1,
      }}
      className="forText txt3"
    >
      {letters.map((letter: string, index: number) => (
        <motion.p
          initial={{ opacity: [0, 0, 0, 1] }}
          animate={{ opacity: [1, 1, 1, 0] }}
          transition={{
            duration: 0.3,
            delay: delay + index * 0.04,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          key={index}
        >
          {letter}
        </motion.p>
      ))}
    </motion.div>
  );
};

const Variant3 = ({ text }: Variant3Props) => {
  return (
    <div className="variant3">
      <div className="variant3_child">
        <TextAnim3 text={text} delay={0} />
        <TextAnim3 text={text} delay={0.5} />
        <TextAnim3 text={text} delay={1} />
        <TextAnim3 text={text} delay={1.5} />
        <TextAnim3 text={text} delay={2} />
      </div>
    </div>
  );
};

export default Variant3;

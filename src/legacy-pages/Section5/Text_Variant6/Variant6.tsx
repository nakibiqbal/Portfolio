/* eslint-disable react/prop-types */
import { useScramble } from "use-scramble";
import { useEffect } from "react";
import "./Variant6.css";

type Variant6Props = {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  rangeOFscramble: [number, number];
};

type TextProps = {
  text: string;
  index?: number;
  second: number;
  rangeOFscramble: [number, number];
};

const Variant6 = ({
  text1,
  text2,
  text3,
  text4,
  text5,
  rangeOFscramble,
}: Variant6Props) => {
  const text = [
    { text: text1, second: 500 },
    { text: text2, second: 800 },
    { text: text3, second: 1100 },
    { text: text4, second: 1400 },
    { text: text5, second: 1700 },
  ];
  return (
    <div className="variant6">
      {text.map(({ text, second }, index) => (
        <Text
          key={index}
          text={text}
          second={second}
          rangeOFscramble={rangeOFscramble}
        />
      ))}
    </div>
  );
};

export default Variant6;
const Text = ({ text, index, second, rangeOFscramble }: TextProps) => {
  const { ref, replay } = useScramble({
    text: text,
    speed: 0.2,
    range: rangeOFscramble,
    seed: 10,
    tick: 1,
    playOnMount: true,
    overdrive: false,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const interval = setInterval(() => {
      const timeout = setTimeout(() => {
        replay();
      }, second);
      return () => clearTimeout(timeout);
    }, 1500);
    return () => clearInterval(interval);
  }, [second]);

  return <p key={index} ref={ref}></p>;
};

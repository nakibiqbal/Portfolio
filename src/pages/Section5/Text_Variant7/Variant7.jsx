/* eslint-disable react/prop-types */
import { useScramble } from "use-scramble";
import { useEffect } from "react";
import "./Variant7.css"

const Variant7 = ({ mainText, rangeOFscramble, animReset }) => {
    const text = [
        { text: mainText, second: 0 },
        { text: mainText, second: 200 },
        { text: mainText, second: 400 },
        { text: mainText, second: 600 },
        { text: mainText, second: 800 },
    ];

    return (
        <div className="variant7">
            <div className="scrambleVarian">
                {text.map(({ text, second }, index) => (
                    <Text key={index} text={text} second={second} rangeOFscramble={rangeOFscramble} animReset={animReset} />
                ))}
            </div>
        </div>
    );
};

export default Variant7;
const Text = ({ text, index, second, rangeOFscramble, animReset }) => {
    const { ref, replay } = useScramble({
        text: text,
        speed: 0.4,
        range: rangeOFscramble,
        seed: 20,
        tick: 2,
        playOnMount: true,
        overdrive: false
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const timeout = setTimeout(() => {
                replay();
            }, second);
            return () => clearTimeout(timeout);
        }, animReset);
        return () => clearInterval(interval);
    }, [second, animReset]);

    return (
        <p key={index} ref={ref}></p>
    );
};
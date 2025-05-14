import "./Section5.css";
import { useState, useEffect, useRef } from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiGreensock } from "react-icons/si";
import bg1 from "../../assets/bg1.png"


import MainVariant1 from "./Main_Variant1/MainVariant1";
import MainVariant2 from "./Main_Variant2/MainVariant2";
import MainVariant3 from "./Main_Variant3/MainVariant3";
import MainVariant4 from "./Main_Variant4/MainVariant4";
import MainVariant5 from "./Main_Variant5/MainVariant5";
import MainVariant6 from "./Main_Variant6/MainVariant6";
import MainVariant7 from "./Main_Variant7/MainVariant7";
import MainVariant8 from "./Main_Variant8/MainVariant8";

// Custom hook to handle interval-based updates
const useVariantInterval = (durations) => {
    const [currentVariant, setCurrentVariant] = useState(1);
    const durationsRef = useRef(durations);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVariant((prev) =>
                prev < durationsRef.current.length ? prev + 1 : 1
            );
        }, durationsRef.current[currentVariant - 1]);

        return () => clearInterval(interval);
    }, [currentVariant]);

    return currentVariant;
};

const Section5 = () => {
    const durations1 = [3000, 3700, 5500, 4800, 4000, 3200, 2800, 5000, 5000, 4800, 5500, 3000, 5000, 4000, 5000];
    const durations2 = [5500, 3800, 4000, 3500, 3700, 4500, 3200, 5000, 4500, 4500, 3200, 4000, 5000, 3000, 4000];
    const durations3 = [3500, 3800, 3800, 3500, 4000, 3000, 3500, 5500, 4500, 3800, 3500, 3500, 3800, 4000, 4500];
    const durations4 = [4000, 4000, 2500, 5000, 3800, 3000, 3500, 3500, 4500, 3500, 3000, 4000, 3800, 3500, 3500];
    const durations5 = [3500, 4000, 3500, 3500, 3800, 3000, 3500, 3000, 5000, 3000, 4500, 4000, 4500, 4500, 4500];
    const durations6 = [3500, 3000, 3800, 3000, 4800, 3000, 3500, 3500, 3700, 3000, 3500, 3000, 4000, 4000, 5500];
    const durations7 = [3500, 3500, 3800, 4000, 3000, 3500, 4500, 3500, 3500, 3000, 3800, 5000, 2500, 4000, 4000];
    const durations8 = [3500, 3800, 4000, 3000, 3500, 4500, 3500, 3500, 3000, 3800, 4000, 2500, 4000, 4000, 3500];

    const currentVariant1 = useVariantInterval(durations1);
    const currentVariant2 = useVariantInterval(durations2);
    const currentVariant3 = useVariantInterval(durations3);
    const currentVariant4 = useVariantInterval(durations4);
    const currentVariant5 = useVariantInterval(durations5);
    const currentVariant6 = useVariantInterval(durations6);
    const currentVariant7 = useVariantInterval(durations7);
    const currentVariant8 = useVariantInterval(durations8);

    return (
        <section id="section5">

            <div className="imgBgTwoParent">
                <img src={bg1} className="bgImgTwo" alt="Background" />
            </div>

            <div className="sec5Wrapper">
                <div className="mainTextVariant one">
                    <MainVariant1 currentVariant={currentVariant1} />
                </div>
                <div className="mainTextVariant two">
                    <MainVariant2 currentVariant={currentVariant2} />
                </div>
                <div className="mainTextVariant three">
                    <MainVariant3 currentVariant={currentVariant3} />
                </div>
                <div className="mainTextVariant four">
                    <MainVariant4 currentVariant={currentVariant4} />
                </div>
                <div className="mainTextVariant five">
                    <MainVariant5 currentVariant={currentVariant5} />
                </div>
                <div className="mainTextVariant six">
                    <MainVariant6 currentVariant={currentVariant6} />
                </div>
                <div className="mainTextVariant seven">
                    <MainVariant7 currentVariant={currentVariant7} />
                </div>
                <div className="mainTextVariant eight">
                    <MainVariant8 currentVariant={currentVariant8} />
                </div>


                <div className="skillIcons">
                    <p>
                        <TbBrandFramerMotion />
                        <span>Motion</span>
                    </p>
                    <p>
                        <FaReact />
                        <span>React</span>
                    </p>
                    <p>
                        <SiGreensock />
                        <span>GSAP</span>
                    </p>

                </div>

            </div>
        </section>
    );
};

export default Section5;
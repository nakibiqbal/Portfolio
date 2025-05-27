/* eslint-disable react/prop-types */
import "./images.css";
import { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Data } from "./data";
import useScreenSize from "../../hooks/ScreenSizeHook/useScreenSize";

gsap.registerPlugin(ScrollTrigger);

export default function Images() {
    const [data] = useState(Data);
    return (
        <div className="parentImgDiv">
            {data.map(({ src, className }, index) => (
                <ScrollFunction key={index} index={index} src={src} className={className} />
            ))}
        </div>
    );
}

const ScrollFunction = ({ index, src, className }) => {
    const childRef = useRef(null);
    const isSmallScreen = useScreenSize(500);

    useGSAP(
        () => {
            gsap.fromTo(
                childRef.current,
                {
                    z: -1000,
                    opacity: 0,
                },
                {
                    z: 300,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: childRef.current,
                        start: `${index * (isSmallScreen ? 80 : 70)}% 50%`,
                        end: `${index * (isSmallScreen ? 80 : 70)}% -110%`,
                        scrub: true,
                    },
                }
            );
        },
        { scope: childRef }
    );

    return (
        <div ref={childRef} className="childImgDiv">
            <div className={`imagesSize ${className}`}>
                <img src={src} loading="lazy" />
            </div>
        </div>
    );
};
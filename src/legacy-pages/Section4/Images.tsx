/* eslint-disable react/prop-types */
import "./images.css";
import { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Data } from "./data";
import useScreenSize from "../../hooks/ScreenSizeHook/useScreenSize";

gsap.registerPlugin(ScrollTrigger);

type DataItem = {
  src: string;
  className: string;
};

export default function Images() {
  const [data] = useState<DataItem[]>(Data);
  return (
    <div className="parentImgDiv">
      {data.map(({ src, className }, index) => (
        <ScrollFunction
          key={index}
          index={index}
          src={src}
          className={className}
        />
      ))}
    </div>
  );
}

const ScrollFunction = ({
  index,
  src,
  className,
}: DataItem & { index: number }) => {
  const childRef = useRef<HTMLDivElement | null>(null);
  const isSmallScreen = useScreenSize(500);

  useGSAP(
    () => {
      gsap.fromTo(
        childRef.current,
        {
          z: -800,
          opacity: 0,
          display: "none",
        },
        {
          z: 300,
          opacity: 1,
          display: "inline-block",
          scrollTrigger: {
            trigger: childRef.current,
            start: `${index * (isSmallScreen ? 80 : 60)}% 50%`,
            end: `${index * (isSmallScreen ? 80 : 60)}% -110%`,
            scrub: true,
          },
        },
      );
    },
    { scope: childRef },
  );

  return (
    <>
      <div ref={childRef} className="childImgDiv">
        <div className={`imagesSize ${className}`}>
          <img src={src} loading="lazy" />
        </div>
      </div>
    </>
  );
};

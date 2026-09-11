/* eslint-disable react/prop-types */
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./PreLoader.css";
import { useEffect, useRef, useState } from "react";
import loadingImg1 from "@/src/assets/MyPhotos/edit8.webp";
import loadingImg2 from "@/src/assets/MyPhotos/n4.webp";
import loadingImg3 from "@/src/assets/MyPhotos/edit6.webp";
import loadingImg4 from "@/src/assets/MyPhotos/edit3.webp";
import loadingImg5 from "@/src/assets/MyPhotos/NAKIB8.webp";
import loadingImg6 from "@/src/assets/MyPhotos/NAKIB5.webp";
import loadingImg7 from "@/src/assets/MyPhotos/n3.webp";
import loadingImg8 from "@/src/assets/MyPhotos/edit2.webp";
import Image from "next/image";

type PreLoaderProps = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const PreLoader = ({ setLoading }: PreLoaderProps) => {
  const images = [
    {
      id: 1,
      src: loadingImg1,
    },
    {
      id: 2,
      src: loadingImg2,
    },
    {
      id: 3,
      src: loadingImg3,
    },
    {
      id: 4,
      src: loadingImg4,
    },
    {
      id: 5,
      src: loadingImg5,
    },
    {
      id: 6,
      src: loadingImg6,
    },
    {
      id: 7,
      src: loadingImg7,
    },
    {
      id: 8,
      src: loadingImg8,
    },
  ];
  const [current, setCurrent] = useState(0);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const preloader = useRef<HTMLDivElement | null>(null);
  const countingTxt = useRef<HTMLParagraphElement | null>(null);
  const syncTxt = useRef<HTMLParagraphElement | null>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => setLoading(false),
      });

      const counter = { value: 0 };
      // First fast count: 0% → 90%
      tl.to(
        counter,
        {
          value: 95,
          duration: 3,
          ease: "power4.out",
          onUpdate: () => {
            if (countingTxt.current)
              countingTxt.current.textContent = `${Math.round(counter.value)}%`;
          },
        },
        2,
      );

      // Then slower count: 95% → 100%
      tl.to(
        counter,
        {
          value: 100,
          duration: 3,
          ease: "power4.out",
          onUpdate: () => {
            if (countingTxt.current)
              countingTxt.current.textContent = `${Math.round(counter.value)}%`;
          },
        },
        2.5,
      );

      tl.to(
        syncTxt.current,
        {
          ease: "power4.out",
          duration: 1,
          left: "2vw",
          fontSize: "4vw",
        },
        1,
      );
      tl.to(
        countingTxt.current,
        {
          right: "2vw",
          ease: "power4.out",
          duration: 1,
          fontSize: "4vw",
        },
        1,
      );
      tl.to(
        syncTxt.current,
        {
          ease: "power4.out",
          duration: 1,
          top: "4vw",
          fontSize: "6vw",
        },
        2,
      );
      tl.to(
        countingTxt.current,
        {
          bottom: "4vw",
          ease: "power4.out",
          duration: 1,
          fontSize: "6vw",
        },
        2,
      );

      tl.to(
        preloader.current,
        { opacity: 0, duration: 2, ease: "power4.out" },
        5,
      );
    },
    { scope: preloader },
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={preloader} className="preloader">
      <div className="preLoaderTxt">
        <p ref={syncTxt}>Synchronizing</p>
        <Image
          ref={imgRef}
          src={images[current].src}
          alt={`PICTURE ${images[current].id}`}
          placeholder="blur"
          priority
        />
        <p ref={countingTxt}>0%</p>
      </div>
    </div>
  );
};

export default PreLoader;

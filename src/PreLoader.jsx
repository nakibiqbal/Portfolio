import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./PreLoader.css";
import { useEffect, useRef, useState } from "react";

const PreLoader = ({ setLoading }) => {
    const images = [
        {
            id: 1,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/edit8.jpg?tr=f-auto,q-auto&updatedAt=1748687120430",
        },
        {
            id: 2,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/n4.jpg?tr=f-auto,q-auto&updatedAt=1748281069197",
        },
        {
            id: 3,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/edit6.jpg?tr=f-auto,q-auto&updatedAt=1748281110269",
        },
        {
            id: 4,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/edit3.jpg?tr=f-auto,q-auto&updatedAt=1748281109191",
        },
        {
            id: 5,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/NAKIB8.jpg?tr=f-auto,q-auto&updatedAt=1748281108479",
        },
        {
            id: 6,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/NAKIB5.jpg?tr=f-auto,q-auto&updatedAt=1748281068345",
        },
        {
            id: 7,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/n3.jpg?tr=f-auto,q-auto&updatedAt=1748281069145",
        },
        {
            id: 8,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/edit2.jpg?tr=f-auto,q-auto&updatedAt=1748281091838",
        },
    ];
    const [current, setCurrent] = useState(0);
    const imgRef = useRef(null);

    const preloader = useRef(null);
    const countingTxt = useRef(null);
    const syncTxt = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => setLoading(false)
        });

        const counter = { value: 0 };
        // First fast count: 0% → 90%
        tl.to(counter, {
            value: 95,
            duration: 3,
            ease: "power4.out",
            onUpdate: () => {
                if (countingTxt.current)
                    countingTxt.current.textContent = `${Math.round(counter.value)}%`;
            }
        }, 2);

        // Then slower count: 95% → 100%
        tl.to(counter, {
            value: 100,
            duration: 3,
            ease: "power4.out",
            onUpdate: () => {
                if (countingTxt.current)
                    countingTxt.current.textContent = `${Math.round(counter.value)}%`;
            }
        }, 2.5);

        tl.to(syncTxt.current, {
            ease: "power4.out",
            duration: 1,
            left: "2vw",
            fontSize: "4vw",
        }, 1);
        tl.to(countingTxt.current, {
            right: "2vw",
            ease: "power4.out",
            duration: 1,
            fontSize: "4vw",
        }, 1);
        tl.to(syncTxt.current, {
            ease: "power4.out",
            duration: 1,
            top: "4vw",
            fontSize: "6vw",
        }, 2);
        tl.to(countingTxt.current, {
            bottom: "4vw",
            ease: "power4.out",
            duration: 1,
            fontSize: "6vw",
        }, 2);

        // tl.to(preloader.current, { opacity: 0, filter: "blur(10px)", duration: 2, ease: "power4.out" }, 5);
    }, { scope: preloader });

    useEffect(() => {
        let isMounted = true;
        const animateImage = () => {
            if (!isMounted) return;
            // Fade in
            gsap.fromTo(imgRef.current, { opacity: 1 }, { opacity: 1, duration: 0.001 });
            // Fade out after delay
            gsap.to(imgRef.current, {
                opacity: 1,
                duration: 0.001,
                delay: 0.1,
                onComplete: () => {
                    if (!isMounted) return;
                    setCurrent((prev) => (prev + 1) % images.length);
                }
            });
        };
        animateImage();
        // Re-run animation when current changes
        return () => { isMounted = false; };
    }, [current]);

    return (
        <div ref={preloader} className="preloader">
            <div className="preLoaderTxt">
                <p ref={syncTxt} >Synchronizing</p>
                <img
                    ref={imgRef}
                    key={images[current].id}
                    src={images[current].src}
                    alt={`PICTURE ${images[current].id}`}
                />
                <p ref={countingTxt}>0%</p>
            </div>
        </div>
    );
};

export default PreLoader;

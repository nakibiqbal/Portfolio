import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./PreLoader.css";
import { useRef } from "react";

const PreLoader = ({ setLoading }) => {
    const imageOne = [
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

    const preloader = useRef(null);
    const images = useRef([]);
    const countingTxt = useRef(null);
    const maskDiv = useRef(null);

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
        }, 0.5);

        // Then slower count: 95% → 100%
        tl.to(counter, {
            value: 100,
            duration: 3,
            ease: "power4.out",
            onUpdate: () => {
                if (countingTxt.current)
                    countingTxt.current.textContent = `${Math.round(counter.value)}%`;
            }
        }, 2);

        tl.fromTo(maskDiv.current, { width: 0 }, { width: "25vw", duration: 1, ease: "power4.out", }, 0.5)

        // Animate images 
        tl.fromTo(images.current,
            {
                clipPath: "polygon(50% 41%, 50% 41%, 50% 60%, 50% 60%)",
            },
            {
                clipPath: "polygon(100% 41%, 0% 41%, 0% 60%, 100% 60%)",
                duration: 1,
                ease: "power4.out",
            }, 1.3);
        tl.to(images.current,
            {
                clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
                duration: 1.5,
                ease: "power4.out",
            }, 2.3);

        // Z-index changes
        tl.to(images.current[7], { zIndex: 1, duration: 0.1 }, 3);
        tl.to(images.current[6], { zIndex: 2, duration: 0.1 }, 3.2);
        tl.to(images.current[5], { zIndex: 3, duration: 0.1 }, 3.4);
        tl.to(images.current[4], { zIndex: 4, duration: 0.1 }, 3.6);
        tl.to(images.current[3], { zIndex: 5, duration: 0.1 }, 3.8);
        tl.to(images.current[2], { zIndex: 6, duration: 0.1 }, 4);
        tl.to(images.current[1], { zIndex: 7, duration: 0.1 }, 4.2);
        tl.to(images.current[0], { zIndex: 8, duration: 0.1 }, 4.4);

        tl.to(preloader.current, { opacity: 0, filter: "blur(10px)", duration: 2, ease: "power4.out" }, 4.8);
    }, { scope: preloader });

    return (
        <div ref={preloader} className="preloader">
            <div className="preLoaderTxt">
                <p>Synchronizing</p>

                <div ref={maskDiv} className="maskDiv" />
                {imageOne.map(({ id, src }, index) => (
                    <img
                        key={id}
                        ref={(el) => (images.current[index] = el)}
                        className={`preloadImage${id}`}
                        src={src}
                        loading="lazy"
                        fetchPriority="high"
                        alt={`PICTURE ${id}`}
                    />
                ))}
                <p ref={countingTxt}>0%</p>
            </div>
        </div>
    );
};

export default PreLoader;

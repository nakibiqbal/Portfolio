import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./PreLoader.css";
import { useRef } from "react";

const PreLoader = ({ setLoading }) => {
    const imageOne = [
        {
            id: 1,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/edit2.jpg?tr=f-auto,q-auto&updatedAt=1748281091838",
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
    ];

    const preloader = useRef(null);
    const images = useRef([]);
    const loadingText = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => { setLoading(false); document.body.style.overflow = "auto" },
            onStart: () => document.body.style.overflow = "hidden",
        });
        // tl.repeat(-1);

        const counter = { value: 0 };
        // Animate loading text
        tl.to(counter, {
            value: 100,
            duration: 4,
            ease: "none",
            onUpdate: () => {
                if (loadingText.current)
                    loadingText.current.textContent = `${Math.round(counter.value)}%`;
            }
        }, 0); // starts at t=0

        // Animate images from center
        tl.fromTo(images.current,
            {
                clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
            },
            {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 1.5,
                ease: "power4.out",
            }, 0.5);

        // Z-index changes staggered inside loading duration
        tl.to(images.current[3], { zIndex: 1, duration: 0.1 }, 1);
        tl.to(images.current[2], { zIndex: 2, duration: 0.1 }, 1.5);
        tl.to(images.current[1], { zIndex: 3, duration: 0.1 }, 2);
        tl.to(images.current[0], { zIndex: 4, duration: 0.1 }, 2.5);

        // Collapse back to center at the end
        tl.to(images.current, {
            clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
            duration: 1,
            ease: "power4.out",
        }, 3); // starts when loading text ends (t = 3)

    }, { scope: preloader });

    return (
        <div ref={preloader} className="preloader">
            <div className="preLoaderTxt">
                <p>Loading</p>
                <p ref={loadingText}>0%</p>
            </div>

            {imageOne.map(({ id, src }, index) => (
                <img
                    key={id}
                    ref={(el) => (images.current[index] = el)}
                    className={`preloadImage${id}`}
                    src={src}
                    alt={`PICTURE ${id}`}
                />
            ))}
        </div>
    );
};

export default PreLoader;

import { act, useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import './Images.css';
import Lenis from "@studio-freight/lenis";

export default function Images() {

    const [isClicked, setIsClicked] = useState(false);
    const [index, setIndex] = useState(1);

    const handleClick = (id) => {
        setIsClicked(!isClicked);
        setIndex(id);
    };

    useEffect(() => {
        const lenis = new Lenis({
            infinite: true,
            duration: 2,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    const { scrollYProgress } = useScroll({
        offset: ["start start", "end end"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-66.67%", "66.67%"]);
    const yR = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);


    const dataOne = [
        {
            id: 1,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/wall.jpg?tr=f-auto,q-auto&updatedAt=1748281075004",
        },
        {
            id: 2,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/edit8.jpg?tr=f-auto,q-auto&updatedAt=1748281108479",
        },
        {
            id: 3,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/edit3.jpg?tr=f-auto,q-auto&updatedAt=1748281109191",
        },
        {
            id: 4,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/edit2.jpg?tr=f-auto,q-auto&updatedAt=1748281091838",
        },
        {
            id: 5,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/edit16.jpg?tr=f-auto,q-auto&updatedAt=1748281098948",
        },
        {
            id: 6,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/n3.jpg?tr=f-auto,q-auto&updatedAt=1748281069145",
        },
        {
            id: 1,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/wall.jpg?tr=f-auto,q-auto&updatedAt=1748281075004",
        },
        {
            id: 2,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/edit8.jpg?tr=f-auto,q-auto&updatedAt=1748281108479",
        },
        {
            id: 3,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/edit3.jpg?tr=f-auto,q-auto&updatedAt=1748281109191",
        },

    ]
    const dataTwo = [
        {
            id: 10,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/n4.jpg?tr=f-auto,q-auto&updatedAt=1748281069197",
        },
        {
            id: 11,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/NAKIB5.jpg?tr=f-auto,q-auto&updatedAt=1748281068345",
        },
        {
            id: 12,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/edit6.jpg?tr=f-auto,q-auto&updatedAt=1748281110269",
        },
        {
            id: 13,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/NAKIB8.jpg?tr=f-auto,q-auto&updatedAt=1748281071415",
        },
        {
            id: 14,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/n2.jpg?tr=f-auto,q-auto&updatedAt=1748281069511",
        },
        {
            id: 15,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/edit12.jpg?tr=f-auto,q-auto&updatedAt=1748281101344",
        },
        {
            id: 16,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/n4.jpg?tr=f-auto,q-auto&updatedAt=1748281069197",
        },
        {
            id: 17,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/NAKIB5.jpg?tr=f-auto,q-auto&updatedAt=1748281068345",
        },
        {
            id: 18,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/edit6.jpg?tr=f-auto,q-auto&updatedAt=1748281110269",
        },
    ]

    return (
        <section id="images">


            <motion.div
                style={{ y }}
                className="imagesWrapp">
                <div className="imgNumContainer">

                    {
                        dataOne.map(({ id, src }) => {
                            const active = index === id && isClicked;
                            return <div
                                onClick={() => handleClick(id)}
                                key={id}
                                className="imgNum"
                            >
                                <AnimatePresence>
                                    <motion.img
                                        animate={{
                                            // position: active ? "fixed" : "fixed",
                                            // left: active ? "50%" : "auto",
                                            // transform: active ? "translateX(-50%)" : "none",
                                            zIndex: active ? 1000 : "auto",
                                            width: active ? "100%" : "13vw",
                                            // objectFit: active ? "contain" : "cover",
                                            height: active ? "80vh" : "31vh",
                                        }}
                                        src={src} alt="PICTURE OF NAKIB IQBAL JOARDER" />

                                </AnimatePresence>
                            </div>
                        })
                    }

                </div>
            </motion.div>


            <motion.div
                style={{ y: yR }}
                className="imagesWrapp">
                <div className="imgNumContainer">

                    {
                        dataTwo.map(({ id, src }) => {
                            return <div
                                key={id} className="imgNum">
                                <img
                                    src={src} alt="PICTURE OF NAKIB IQBAL JOARDER" />
                            </div>
                        })
                    }

                </div>
            </motion.div>



        </section>
    )
}

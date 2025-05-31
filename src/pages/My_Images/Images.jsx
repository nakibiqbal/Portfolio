import { act, useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import './Images.css';
import Lenis from "@studio-freight/lenis";

export default function Images() {

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

    const y = useTransform(scrollYProgress, [0, 1], ["-72.35%", "72.35%"]);
    const yR = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);


    const dataOne = [
        {
            id: 1,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/wall.jpg?tr=f-auto,q-auto&updatedAt=1748281075004",
        },
        {
            id: 2,
            src: "https://ik.imagekit.io/nakibKit/My%20Images/edit8.jpg?tr=f-auto,q-auto&updatedAt=1748687120430",
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
            src: "https://ik.imagekit.io/nakibKit/My%20Images/edit8.jpg?tr=f-auto,q-auto&updatedAt=1748687120430",
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


            <motion.div style={{ y }} className="imagesWrapp">
                <div className="imgNumContainer">

                    {
                        dataOne.map(({ id, src }) => {
                            return <div key={id} className="imgNum">
                                <img src={src} alt="PICTURE OF NAKIB IQBAL JOARDER" />
                            </div>
                        })
                    }

                </div>
            </motion.div>


            <motion.div style={{ y: yR }} className="imagesWrapp">
                <div className="imgNumContainer">

                    {
                        dataTwo.map(({ id, src }) => {
                            return <div key={id} className="imgNum">
                                <img src={src} alt="PICTURE OF NAKIB IQBAL JOARDER" />
                            </div>
                        })
                    }

                </div>
            </motion.div>


        </section>
    )
}

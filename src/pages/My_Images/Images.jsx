import { AnimatePresence, motion } from 'framer-motion';
import './Images.css';
import { useState } from 'react';
import { customEase } from '../../Easings/customEase';
import Button from "../../Button/Button"
import { BsArrowUpLeft } from "react-icons/bs";

export default function Images() {
    const [current, setCurrent] = useState(null);
    const [notCurrent, setNotCurrent] = useState(false);
    const [btnActive, setBtnActive] = useState(false);

    const dataOne = [
        { id: 1, src: "https://ik.imagekit.io/nakibKit/My%20Images/wall.jpg?tr=f-auto,q-auto&updatedAt=1748281075004" },
        { id: 2, src: "https://ik.imagekit.io/nakibKit/My%20Images/edit8.jpg?tr=f-auto,q-auto&updatedAt=1748687120430" },
        { id: 3, src: "https://ik.imagekit.io/nakibKit/My%20Images/edit3.jpg?tr=f-auto,q-auto&updatedAt=1748281109191" },
        { id: 4, src: "https://ik.imagekit.io/nakibKit/My%20Images/edit2.jpg?tr=f-auto,q-auto&updatedAt=1748281091838" },
        { id: 5, src: "https://ik.imagekit.io/nakibKit/My%20Images/edit16.jpg?tr=f-auto,q-auto&updatedAt=1748281098948" },
        { id: 6, src: "https://ik.imagekit.io/nakibKit/My%20Images/n3.jpg?tr=f-auto,q-auto&updatedAt=1748281069145" },
        { id: 7, src: "https://ik.imagekit.io/nakibKit/My%20Images/n4.jpg?tr=f-auto,q-auto&updatedAt=1748281069197" },
        { id: 8, src: "https://ik.imagekit.io/nakibKit/My%20Images/NAKIB5.jpg?tr=f-auto,q-auto&updatedAt=1748281068345" },
        { id: 9, src: "https://ik.imagekit.io/nakibKit/My%20Images/edit6.jpg?tr=f-auto,q-auto&updatedAt=1748281110269" },
        { id: 10, src: "https://ik.imagekit.io/nakibKit/My%20Images/NAKIB8.jpg?tr=f-auto,q-auto&updatedAt=1748281071415" },
        { id: 11, src: "https://ik.imagekit.io/nakibKit/My%20Images/n2.jpg?tr=f-auto,q-auto&updatedAt=1748281069511" },
        { id: 12, src: "https://ik.imagekit.io/nakibKit/My%20Images/edit12.jpg?tr=f-auto,q-auto&updatedAt=1748281101344" },
    ];

    return (
        <section id="myImages">

            <AnimatePresence>
                {notCurrent && (
                    <motion.div
                        transition={{ duration: 1, ease: customEase }}
                        className='notCurrentDiv'
                        layout
                    >
                        {dataOne.map((image) => (
                            <motion.img
                                layoutId={image.id}
                                src={image.src}
                                transition={{ duration: 1, ease: customEase }}
                                key={image.id}
                                className="notCurrentimages"
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {current && (
                    <motion.img
                        className='currentImg'
                        layoutId={current.id}
                        transition={{ duration: 1, ease: customEase }}
                        src={current.src}
                    />
                )}

            </AnimatePresence>

            <AnimatePresence>
                <motion.div
                    layout
                    transition={{ duration: 1, ease: customEase }}
                    className="imagesWrapper"
                >
                    {dataOne.map((image) => (
                        <motion.img
                            layoutId={image.id}
                            onClick={() => {
                                setCurrent(image);
                                setNotCurrent(true);
                                setBtnActive(true);
                            }}
                            initial={{ filter: "blur(20px)" }}
                            animate={{ filter: "blur(0px)", transition: { duration: 2, ease: customEase } }}
                            src={image.src}
                            transition={{ duration: 1, ease: customEase }}
                            key={image.id}
                            className="images"
                        />
                    ))}
                </motion.div>
            </AnimatePresence>

            {btnActive && (
                <button
                    className='backButton'
                    onClick={() => {
                        setCurrent(null);
                        setNotCurrent(false);
                        setBtnActive(false);
                    }}
                >
                    <BsArrowUpLeft />
                </button>
            )}


            <div className="backPageBtn">
                <Button page="/" text="back to home" />
            </div>

        </section>
    );
}
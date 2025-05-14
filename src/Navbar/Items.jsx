/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useScramble } from "use-scramble";
import { customEase } from "../Easings/customEase";

const Items = ({ setIsClick }) => {
    const navData = [
        { item: "Skills", section: "#section5", id: 1 },
        { item: "Services", section: "#section6", id: 2 },
        { item: "Projects", section: "#image_reveal", id: 3 },
        { item: "About", section: "#section4", id: 4 },
        { item: "Contact", section: "#ContactSection", id: 5 },
    ]

    return (
        <>
            {navData.map((data, index) => {
                const { item, section, id } = data;
                return <ScrambleItems key={index} item={item} section={section} id={id} setIsClick={setIsClick} />
            })}
        </>
    )
}

export default Items



const ScrambleItems = ({ item, section, id, setIsClick }) => {

    // hook returns a ref
    const { ref, replay } = useScramble({
        text: item,
        range: [65, 35],
        speed: 0.3,
        tick: 0.5,
        playOnMount: false,
        overdrive: false,
    });

    return <motion.a
        key={id}
        ref={ref}
        onMouseOver={replay}
        onFocus={replay}
        initial={{ opacity: 0, scale: 1.5, y: 150, filter: "blur(20px)", color: "green" }}
        whileHover={{ color: "#00ff00bf" }}
        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)", transition: { delay: id * 0.1, ease: customEase, duration: 1 } }}
        exit={{ opacity: 0, y: 100, scale: 1, filter: "blur(20px)", transition: { ease: customEase, duration: 0.5 } }}

        href={section}
        onClick={async (e) => {
            await new Promise((resolve) => {
                e.preventDefault(); // Prevent the default jump behavior
                setTimeout(resolve, 500); // Wait for 300ms (adjust as needed)
                setIsClick(false); // Close the menu
            });
            const target = document.querySelector(section);
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth", // Smooth scroll
                    block: "start", // Scroll to the top of the section
                });
            }
        }}
    />
}
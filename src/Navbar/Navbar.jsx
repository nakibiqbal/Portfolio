import { Suspense, lazy } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Navbar.css";
const Items = lazy(() => import("./Items"));
import useScreenSize from "../hooks/ScreenSizeHook/useScreenSize";
import { customEase } from "../Easings/customEase";
import useStateHook from "../hooks/CustomStateHook/useStateHook";

const Navbar = () => {

    const { isClick, setIsClick } = useStateHook()
    const isSmallScreen = useScreenSize(1538);

    return (
        <>
            <div className="navbar">

                <AnimatePresence>
                    <motion.button
                        animate={{
                            border: isClick ? "1px dashed #00ff00bf" : "1px solid #00ff00bf",
                        }}
                        transition={{
                            duration: 1,
                            delay: isClick ? 0 : 1,
                            ease: customEase
                        }}
                        onClick={() => setIsClick(!isClick)}>MENU</motion.button>

                    <div
                        className="parentNavItem"
                        style={{
                            background: isClick ? "rgb(0 0 0 / 70%)" : "transparent",
                            pointerEvents: isClick ? "all" : "none"
                        }}
                    >
                        {
                            isClick && <div
                                onClick={() => setIsClick(false)} // Close the menu when clicking outside
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        }
                        <motion.nav
                            animate={{
                                width: isClick ? (isSmallScreen ? "90%" : "48rem") : (isSmallScreen ? "6rem" : "7rem"),
                                height: isClick ? (isSmallScreen ? "92%" : "95%") : (isSmallScreen ? "3.1rem" : "3.5rem"),
                                border: isClick ? "1px solid #00ff00bf" : "1px dashed #00ff00bf",
                            }}
                            transition={{
                                duration: 1,
                                delay: isClick ? 0 : 1,
                                ease: customEase
                            }}
                            className="navItem">

                            <AnimatePresence>
                                {
                                    isClick &&
                                    <div className="navItems">

                                        <div className="navItemsChild">
                                            <Suspense fallback={<h1>Loading...</h1>}>
                                                <Items setIsClick={setIsClick} />
                                            </Suspense>

                                        </div>
                                        <motion.div
                                            className="nakibIqbal"
                                            style={{ backgroundImage: `url(https://ik.imagekit.io/nakibKit/tr:q-auto,f-auto/My%20Images/edit2.jpg?updatedAt=1748281091838)` }}
                                            initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", filter: "blur(20px) grayscale(1)" }} // Hidden at the bottom
                                            animate={{
                                                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", filter: "blur(0px) grayscale(0)", transition: {
                                                    delay: 1, duration: 1,
                                                    ease: customEase,
                                                }
                                            }} // Appear from bottom to top
                                            exit={{
                                                clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", filter: "blur(20px) grayscale(1)", transition: {
                                                    delay: 0, duration: 1,
                                                    ease: customEase,
                                                }
                                            }} // Hide from top to bottom
                                        />
                                    </div>
                                }
                            </AnimatePresence>

                        </motion.nav>
                    </div>
                </AnimatePresence >

            </div >
        </>
    )
}

export default Navbar

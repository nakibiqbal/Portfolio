import { motion } from "framer-motion"
import { customEase } from "./Easings/customEase"
export default function Loader() {
    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px"
            }}
        >
            {Array.from({ length: 5 }, (_, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.3,
                        ease: customEase,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: index * 0.08,
                    }}
                    style={{
                        background: "green",
                        width: "10px",
                        height: "10px",
                    }}
                />
            ))}
        </div>
    )
}

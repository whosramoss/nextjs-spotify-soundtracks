import { motion } from "framer-motion"
import { ICommons, variants } from "@utils/utils"

export default function SectionAnimate({ children }: ICommons) {
    return (
        <motion.div
            initial="initial"
            animate="open"
            exit="close"
            variants={variants}
            className="absolute z-0 bg-ground top-0 left-0  w-full"
        >
            {children}
        </motion.div>
    )
}

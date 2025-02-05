import { ICommons, ISlide, slideVariants } from "@utils/utils";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface ISlideInTransition extends ICommons, ISlide { }

export default function SlideInTransition({
    children,
    delay,
    duration,
    initialX,
    fontSize,
}: ISlideInTransition) {

    return (
        <div className="overflow-hidden mt-4">
            <AnimatePresence>
                <motion.div
                    initial="initial"
                    variants={slideVariants({ initialX, fontSize, delay, duration })}
                    animate="animate"
                    className="text-contrast"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
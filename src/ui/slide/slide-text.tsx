import { ISlide, slideVariants } from "@utils/utils";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface ISlideInText extends ISlide {
    text: { id: number, content: React.ReactNode }[],
}

export default function SlideInText({
    text,
    delay,
    duration,
    initialX,
    fontSize,
}: ISlideInText) {

    return (
        <AnimatePresence>
            {text.map(({ id, content }) => (
                <div key={id} className="overflow-hidden">
                    <motion.div
                        key={id}
                        initial="initial"
                        variants={slideVariants({ initialX, fontSize, delay, duration })}
                        animate="animate"
                        className="text-contrast"
                    >
                        {content}
                    </motion.div>
                </div>

            ))}
        </AnimatePresence>
    );
}
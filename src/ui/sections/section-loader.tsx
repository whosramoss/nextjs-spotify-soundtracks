import React from "react";
import { setTextByDevice, variants } from "@utils/utils";
import { AnimatePresence, AnimationControls, motion } from "framer-motion";
import { Slide } from "@ui/slide";

interface ILoader {
    controls: AnimationControls,
    contentControls: AnimationControls,
    text: string[]
}

export default function SectionLoader({ controls, contentControls, text }: ILoader) {

    const { contentinitial, contentclose, textinitial, textclose } = variants;
    const motionValues = {
        animate: contentControls,
        initial: contentinitial,
        exit: contentclose,
    }

    return (
        <div className="h-screen flex flex-col justify-between section">
            <div className="flex justify-center items-center z-0">
                <div className="space-x-4 uppercase">
                    <Slide.Text delay={1} duration={2} text={setTextByDevice('mobile', text)} />
                </div>
            </div>
            <motion.img
                className="absolute w-screen h-screen object-cover left-0 bottom-0"
                src={"https://static.vecteezy.com/system/resources/previews/051/314/739/non_2x/abstract-colorful-green-gradient-illustration-background-with-3d-look-and-simple-circle-shadow-pattern-eps10-vector.jpg"}
                {...motionValues}
            ></motion.img>
            <Slide.Transition>
                <AnimatePresence>
                    <motion.div animate={controls} initial={textinitial} exit={textclose}   >
                        <img src="./soundtrack.svg" className="justify-self-center itens-center w-full place-content-center " />
                    </motion.div>
                </AnimatePresence>
            </Slide.Transition>
            <AnimatePresence>
                <motion.div {...motionValues} className="text-contrast text-left">
                    <div className="flex justify-between items-center text-contrast ">
                        <div className="flex flex-col">
                            <span className="text-5xl font-bold hidden sm:block">
                                <Slide.Text delay={1} duration={2} text={setTextByDevice('web', text)} />
                            </span>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}


"use client"

import React from "react";
import { motion } from "framer-motion";
import { Spotify } from "react-spotify-embed";

interface ISectionSoundtrack {
    data?: string[]
}

export default function SectionSoundtrack({ data = [] }: ISectionSoundtrack) {
    return (
        <div className="py-32 sm:py-2 ">
            <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={{
                    animate: {
                        transition: {
                            staggerChildren: 0.1,
                            delay: 0.1,
                            ease: "easeOut",
                        },
                    },
                }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data.map((link, index) => (
                        <div key={index} className="my-8 mx-4">
                            <Spotify link={link} />
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );

}

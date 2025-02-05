import React from "react";
import { setTextByDevice } from "@utils/utils";
import { Slide } from "@ui/slide";

interface ISectionDescription {
    text: string[]
}

export default function SectionDescription({ text }: ISectionDescription) {
    return (
        <div className="h-screen grid grid-rows-4 section">
            <div className="row-span-3"></div>
            <div className="row-span-1">
                <div className="hidden sm:flex flex-col ">
                    <Slide.Text
                        delay={1} duration={1.5}
                        text={setTextByDevice('web', text)}
                    />
                </div>
                <div className="flex sm:hidden col-span-12 md:col-span-7 md:pt-10 flex-col text-xl justify-end pb-24">
                    <Slide.Text
                        delay={1} duration={1.5}
                        text={setTextByDevice('mobile', text)}
                    />
                </div>
            </div>
        </div>
    );
}
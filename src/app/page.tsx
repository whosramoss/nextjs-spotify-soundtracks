"use client"
import { AnimatePresence } from "framer-motion";
import { Section } from "@ui/sections";
import { useAnimateControls } from "@hooks/useAnimateControls";
import React from "react";
import Body from "@app/_components/body";

export default function Page() {
  const { ctrlValues, isOpen } = useAnimateControls()

  return (
    <React.Fragment>
      <AnimatePresence>
        {isOpen && (
          <Section.Animate >
            <Section.Description text={[
              "A soundtrack is more than just background music,",
              "it's the heartbeat of a story, a bridge between emotion and narrative.",
              "Whether it's a film, video game, or personal playlist,",
              "a well-crafted soundtrack has the power to enhance every moment.",
              "It elevates emotions, deepens experiences, and transforms",
              "the way we perceive a scene or a memory.",
            ]} />
            <div className="section-x">
              <Body />
            </div>
          </Section.Animate>
        )}
      </AnimatePresence>
      <Section.Loader {...ctrlValues} text={["Feel the beat -", "live the moment"]} />
    </React.Fragment>
  );
}


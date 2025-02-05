"use client"

import { variants } from "@utils/utils";
import { AnimationControls, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

interface IUseAnimateControls {
  isOpen: boolean;
  ctrlValues: {
    controls: AnimationControls;
    contentControls: AnimationControls;
  };
}
export const useAnimateControls = (): IUseAnimateControls => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const contentControls = useAnimation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    setTimeout(() => {
      setIntroAnimation(true);
    }, 3000);
  }, []);

  const setIntroAnimation = (v: any) => {
    setIsOpen(v);
    if (v) {
      controls.start(variants.textopen);
      contentControls.start(variants.contentopen);
    } else {
      controls.start(variants.textclose);
      contentControls.start(variants.contentclose);
    }
  }

  const ctrlValues = { controls, contentControls }

  return {
    ctrlValues,
    isOpen
  }

}
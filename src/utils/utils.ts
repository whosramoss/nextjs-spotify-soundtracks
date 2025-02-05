import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import ms from "ms";

export function setTextByDevice(type: string, value: any[]) {
  if (type === 'web') {
    return value.map((item: string, index: number) => ({
      id: index + 1,
      content: item.trim(),
    }));
  }

  return [{
    id: 1,
    content: value.join(' ').replace(/\s(?=\w+\s)/g, ' ').replace(/\s(?=[.,])/g, '')
  },];
}

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export interface ICommons {
  className?: string;
  children?: React.ReactNode;
}

export interface ISlide {
  delay?: number,
  duration?: number,
  initialX?: number,
  fontSize?: string,
}


const animationDuration = 1.1;
const animationDelay = 0.7;

export const variants = {
  initial: { x: "-100vw" },
  open: {
    x: 0,
    transition: {
      delay: animationDelay,
      duration: animationDuration,
      ease: [0.85, 0, 0.15, 1],
      staggerChildren: 0.1,
    },
  },
  close: {
    x: "-100vw",
    transition: {
      delay: animationDelay,
      duration: animationDuration,
      ease: [0.85, 0, 0.15, 1],
      staggerChildren: 0.1,
    },
  },
  textinitial: {
    x: 0,
  },
  textopen: {
    x: "-0%", //    x: "-45%", 
    transition: {
      delay: animationDelay,
      duration: animationDuration,
      ease: [0.85, 0, 0.15, 1],
      staggerChildren: 0.1,
    },
  },
  textclose: {
    x: -10,
    transition: {
      delay: animationDelay,
      duration: animationDuration,
      ease: [0.85, 0, 0.15, 1],
      staggerChildren: 0.1,
    },
  },
  contentinitial: {
    x: 0,
  },
  contentopen: {
    x: "120%",
    transition: {
      delay: animationDelay,
      duration: animationDuration - 0.3,
      ease: [0.85, 0, 0.15, 1],
      staggerChildren: 0.1,
    },
  },
  contentclose: {
    x: 0,
    transition: {
      delay: animationDelay + 0.3,
      duration: animationDuration,
      ease: [0.85, 0, 0.15, 1],
      staggerChildren: 0.1,
    },
  },
};

export const slideVariants = ({
  delay = 0.75,
  duration = 1.5,
  initialX = 0,
  fontSize = "100%",
}: ISlide) => ({
  initial: {
    opacity: 1,
    x: initialX,
    y: fontSize,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: delay,
      duration: duration,
      ease: [0.85, 0, 0.15, 1],
      staggerChildren: 0.1,
    },
  },

})
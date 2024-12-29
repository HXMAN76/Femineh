"use client";

import { motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface WordFadeInProps {
  words: string;
  className?: string;
  delay?: number;
  variants?: Variants;
  textSize?: string;
  textColor?: string;
  textOpacity?: number;
  shadow?: boolean;
  fontWeight?: string;
  textAlign?: string;
  letterSpacing?: string;
  dropShadow?: string;
}

export default function WordFadeIn({
  words,
  delay = 0.15,
  variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 0.7,
      transition: { delay: i * delay },
    }),
    simple: (i: number) => ({ 
      y : 0,
      opacity: 1,
      transition: { delay: i * delay },
     }),
  },
  className,
  textSize = "text-1xl md:text-3xl md:leading-[5rem]",
  textColor = "text-black dark:text-white",
  textOpacity = 1,
  fontWeight = "font-bold",
  textAlign = "text-center",
  letterSpacing = "tracking-[-0.02em]",
  dropShadow = "drop-shadow-sm",
}: WordFadeInProps) {
  const _words = words.split(" ");

  return (
    <motion.h1
      variants={variants}
      initial="hidden"
      animate="visible"
      className={cn(
        `font-display ${textAlign} ${fontWeight} ${letterSpacing} ${dropShadow} ${textSize} ${textColor} opacity-${textOpacity}`,
        className,
      )}
    >
      {_words.map((word, i) => (
        <motion.span key={word} variants={variants} custom={i}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.h1>
  );
}

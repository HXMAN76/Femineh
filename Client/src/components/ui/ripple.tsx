import React, { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface RippleProps {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  className?: string;
}

const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.8, // Increased opacity for better visibility
  numCircles = 8,
  className,
}: RippleProps) {
  return (
    <div
      className={cn(
        "pointer-events-none select-none absolute inset-0",
        className
      )}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70; // Increment ripple size
        const opacity = Math.max(mainCircleOpacity - i * 0.1, 0); // Prevent opacity from going below 0
        const animationDelay = `${i * 0.1}s`; // Adjust animation delay for smoother ripple effect
        const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
        const borderOpacity = 90 - i * 10; // Higher opacity for the outer ripples

        return (
          <div
            key={i}
            className={`absolute animate-ripple rounded-full border-white`}
            style={
              {
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                borderStyle,
                borderWidth: "2px", // Increased border width for prominence
                borderColor: `rgba(255, 255, 255, ${borderOpacity / 100})`, // Ensure white color
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)",
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";

export default Ripple;

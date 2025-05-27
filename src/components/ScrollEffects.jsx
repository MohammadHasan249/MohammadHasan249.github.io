import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import PropTypes from "prop-types";

// ScrollDivider Component
export function ScrollDivider({
  className,
  variant = "arrow",
  color = "bg-foreground", // Note: bg-foreground is likely a shadcn/ui color. You might need to adjust this based on your theme.
  text,
  animated = true,
}) {
  return (
    <div className={cn("flex w-full flex-col items-center justify-center pt-2", className)}>
      {text && (
        <p className="mb-2 text-lg font-medium text-muted-foreground">
          {text}
        </p>
      )}

      {variant === "arrow" && (
        <motion.div
          animate={animated ? { y: [0, 8, 0] } : undefined}
          transition={animated ? { 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut"
          } : undefined}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background"
          /* Note: border-border and bg-background are likely shadcn/ui colors. Adjust if needed. */
        >
          <ChevronDown className="h-5 w-5 text-foreground" /* Note: text-foreground is likely a shadcn/ui color. Adjust if needed. */ />
        </motion.div>
      )}

      {variant === "line" && (
        <div className="relative h-px w-24">
          <div className={cn("absolute h-px w-full", color)} />
          {animated && (
            <motion.div
              className={cn("absolute h-px w-8", color)}
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          )}
        </div>
      )}

      {variant === "dots" && (
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className={cn("h-2 w-2 rounded-full", color)}
              animate={animated ? { 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              } : undefined}
              transition={animated ? {
                repeat: Infinity,
                duration: 1.5,
                delay: i * 0.2,
                ease: "easeInOut"
              } : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}

ScrollDivider.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["arrow", "line", "dots"]),
  color: PropTypes.string,
  text: PropTypes.string,
  animated: PropTypes.bool,
};

// ScrollPrompt Component
export function ScrollPrompt({
  className,
  text = "Scroll to explore",
  direction = "down",
  springOptions = {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  },
}) {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0, direction === "down" ? 50 : -50]),
    springOptions
  );

  return (
    <motion.div
      className={cn(
        "fixed bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center justify-center",
        className
      )}
      style={{ opacity, y }}
    >
      <p className="mb-2 text-sm font-medium text-muted-foreground">
         {/* Note: text-muted-foreground is likely a shadcn/ui color. Adjust if needed. */}
        {text}
      </p>
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background">
         {/* Note: border-border and bg-background are likely shadcn/ui colors. Adjust if needed. */}
        <ChevronDown
          className={cn(
            "h-5 w-5 text-foreground transition-transform",
            /* Note: text-foreground is likely a shadcn/ui color. Adjust if needed. */
            direction === "up" && "rotate-180"
          )}
        />
      </div>
    </motion.div>
  );
}

ScrollPrompt.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  direction: PropTypes.oneOf(["down", "up"]),
  springOptions: PropTypes.shape({
    stiffness: PropTypes.number,
    damping: PropTypes.number,
    mass: PropTypes.number,
  }),
}; 
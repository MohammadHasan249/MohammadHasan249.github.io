import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import PropTypes from "prop-types";

// ScrollDivider Component
export function ScrollDivider({
  className,
  variant = "arrow",
  color = "bg-foreground",
  text,
  animated = true,
  scrollTo = "#what-i-do",
}) {
  const handleClick = () => {
    const element = document.querySelector(scrollTo);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={cn("flex w-full flex-col items-center justify-center py-8 cursor-pointer", className)}
      onClick={handleClick}
    >
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
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background cursor-pointer"
        >
          <ChevronDown className="h-5 w-5 text-foreground" />
        </motion.div>
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
  scrollTo: PropTypes.string,
};

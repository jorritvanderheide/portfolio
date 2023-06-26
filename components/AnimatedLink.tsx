"use client";

import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import type AnimatedLinkProps from "@/types/AnimatedLinkProps";

// animated link component
const AnimatedLink: FunctionComponent<AnimatedLinkProps> = ({
  children,
  className,
  scale,
}) => {
  const scaleValue = scale ? scale : 0.95;

  return (
    <motion.div
      className={className}
      whileHover={{
        scale: scaleValue,
        transition: { duration: 0.3 },
        y: 2,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedLink;

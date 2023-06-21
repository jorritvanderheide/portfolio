"use client";

import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import type AnimatedLinkProps from "@/types/AnimatedLinkProps";

const AnimatedLink: FunctionComponent<AnimatedLinkProps> = ({
  children,
  scale,
}) => {
  const scaleValue = scale ? scale : 0.9;

  return (
    <motion.div
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

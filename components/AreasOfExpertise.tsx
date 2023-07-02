"use client";

import { FunctionComponent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type AreasOfExpertiseProps from "@/types/AreasOfExpertiseProps";

// learning activity component
const AreasOfExpertise: FunctionComponent<AreasOfExpertiseProps> = ({
  areas,
  className,
}) => {
  const [isOpen, setIsOpen] = useState("");

  return (
    <>
      {areas?.length > 0 && (
        <div
          className={`mb-2 flex select-none justify-normal self-start font-headings text-[0.75em] ${className}`}
        >
          {areas.map((tag, index) => (
            <div key={index}>
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  className={`group mr-1 flex items-center whitespace-nowrap rounded-full bg-gray-200 outline-none hover:cursor-pointer dark:bg-gray-700 ${
                    isOpen !== tag.area && isOpen !== "" && "mr-0 hidden"
                  }`}
                  onMouseEnter={() => setIsOpen(tag.area)}
                  onMouseLeave={() => setIsOpen("")}
                >
                  <div
                    id={`area-${index.toString()}`}
                    className={`rounded-full bg-gray-200 px-[0.5em] py-[0.15em] group-hover:bg-gray-300 dark:bg-gray-600`}
                  >
                    <span className={`text-white mix-blend-difference`}>
                      {tag.area}
                    </span>
                  </div>
                  {isOpen === tag.area && (
                    <motion.div
                      className="px-[0.5em]"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, type: "spring" }}
                    >
                      {tag.text}
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AreasOfExpertise;

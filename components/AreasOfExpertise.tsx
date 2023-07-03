"use client";

import { FunctionComponent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type AreasOfExpertiseProps from "@/types/AreasOfExpertiseProps";
import AnimatedLink from "./AnimatedLink";

// learning activity component
const AreasOfExpertise: FunctionComponent<AreasOfExpertiseProps> = ({
  areas,
  className,
}) => {
  const [isOpen, setIsOpen] = useState("");

  return (
    <>
      {areas?.length > 0 && (
        <motion.div
          className={`mb-2 flex select-none self-start font-headings text-[0.75em] ${className}`}
          layout="position"
          transition={{ layout: { duration: 0.4, type: "spring" } }}
        >
          {areas.map((tag, index) => (
            <div key={index}>
              <AnimatePresence>
                <AnimatedLink>
                  {(isOpen === tag.area || isOpen == "") && (
                    <motion.div
                      className="group mr-1 flex cursor-pointer items-center whitespace-nowrap rounded-full bg-gray-200 outline-none dark:bg-gray-700"
                      initial={{ opacity: 0, scale: 0.75 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.75 }}
                      transition={{
                        layout: { duration: 0.4, type: "spring" },
                      }}
                      layout
                      onClick={() =>
                        isOpen === tag.area
                          ? setIsOpen("")
                          : setIsOpen(tag.area)
                      }
                    >
                      <motion.div
                        className={`self-start rounded-full bg-gray-200 px-[0.5em] py-[0.15em] font-medium dark:bg-gray-700 ${
                          isOpen === tag.area &&
                          "!bg-gray-300 dark:!bg-gray-600"
                        }`}
                        layout="position"
                      >
                        <p>{tag.area}</p>
                      </motion.div>

                      {isOpen === tag.area && (
                        <motion.div
                          className="py-[0.15em] pl-[0.5em] pr-[0.75em]"
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          initial={{ opacity: 0 }}
                          transition={{
                            duration: 0.4,
                            type: "spring",
                          }}
                        >
                          <p className="text-[0.9em]">{tag.text}</p>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatedLink>
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default AreasOfExpertise;

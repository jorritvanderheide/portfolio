"use client";

import { FunctionComponent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AnimatedLink from "@/components/AnimatedLink";
import type LearningActivitiesItemProps from "@/types/LearningActivitiesItemProps";

// learning activities item component
const LearningActivitiesItem: FunctionComponent<
  LearningActivitiesItemProps
> = ({ image, isPortrait, index, slug, title }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.article
        className="w-full"
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, type: "spring" }}
      >
        <Link
          href={`/learning-activities/${slug}`}
          passHref
        >
          <AnimatedLink>
            <div className={`flex flex-col gap-1 ${isPortrait && "px-3"}`}>
              <figure
                className={`relative h-auto w-full ${
                  isPortrait ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  className="object-covers rounded-3xl"
                  src={image}
                  alt={title}
                  fill={true}
                  priority={index! <= 5 ? true : false}
                  sizes={`(min-width: 769px) 40vw, (min-width: 1921px) 25vw, 90vw`}
                />
              </figure>
              <p className="select-none font-headings text-body font-medium uppercase">
                {title}
              </p>
            </div>
          </AnimatedLink>
        </Link>
      </motion.article>
    </AnimatePresence>
  );
};

export default LearningActivitiesItem;

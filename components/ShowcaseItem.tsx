"use client";

import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLink from "./AnimatedLink";
import type ShowcaseItemProps from "@/types/ShowcaseItemProps";

// showcase item component
const ShowcaseItem: FunctionComponent<ShowcaseItemProps> = ({
  image,
  index,
  priority,
  slug,
  title,
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.article
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, type: "spring" }}
        className={`group h-full w-full basis-1/3 md:basis-1/5 ${
          index! > 3 && "hidden md:block"
        }`}
      >
        <div className="flex h-full w-full flex-col gap-3">
          <Link
            href={`/learning-activities/${slug}`}
            className="h-full"
            passHref
          >
            <AnimatedLink className="h-full w-full">
              <figure className="relative h-full w-full overflow-hidden">
                <Image
                  className="rounded-3xl object-cover"
                  src={image}
                  alt={title}
                  fill={true}
                  priority={priority}
                  sizes="(min-width: 768px) 75vw, 90vw"
                />
              </figure>
            </AnimatedLink>
          </Link>
        </div>
      </motion.article>
    </AnimatePresence>
  );
};

export default ShowcaseItem;

"use client";

import { FunctionComponent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLink from "@/components/AnimatedLink";
import type InspirationItemProps from "@/types/InspirationItemProps";

// inspiration item component
const InspirationItem: FunctionComponent<InspirationItemProps> = ({
  description,
  index,
  title,
  url,
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.article
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          type: "spring",
          delay: 0.1 * (index! + 1),
        }}
      >
        <Link
          href={url}
          rel="noreferrer noopener"
          target="_blank"
          passHref
        >
          <AnimatedLink>
            <div
              className={`flex w-full flex-row items-center justify-between gap-2 md:gap-4`}
            >
              <div className="flex flex-col gap-1">
                <p className="font-headings text-subheadings font-semibold uppercase">
                  {title}
                </p>
                <p className="font-headings text-body">{description}</p>
              </div>
              <span className="material-icons select-none !text-body">
                call_made
              </span>
            </div>
          </AnimatedLink>
        </Link>
      </motion.article>
    </AnimatePresence>
  );
};

export default InspirationItem;

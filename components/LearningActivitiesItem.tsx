"use client";

import { FunctionComponent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedLink from "@/components/AnimatedLink";
import type LearningActivitiesItemProps from "@/types/LearningActivitiesItemProps";

// learning activities item component
const LearningActivitiesItem: FunctionComponent<
  LearningActivitiesItemProps
> = ({ image, isPortrait, index, slug, title }) => {
  const [loading, setLoading] = useState(true);

  return (
    <article className="mb-4 w-full">
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
                className="object-cover"
                src={image}
                alt={title}
                fill={true}
                priority={index! <= 2 ? true : false}
                sizes={`(min-width: 769px) 40vw, (min-width: 1921px) 25vw, 90vw)`}
                onLoad={() => setLoading(false)}
              />
              <div
                className={`absolute z-10 h-full w-full ${
                  loading ? "bg-white" : "hidden"
                }`}
              >
                <div
                  className={`h-full w-full ${
                    loading && "animate-pulse bg-[#d9d9d9]"
                  }`}
                ></div>
              </div>
            </figure>

            <p
              className={`font-headings text-body uppercase ${
                loading &&
                "animate-pulse line-through decoration-[#d9d9d9] decoration-[1.25em]"
              }`}
            >
              {title}
            </p>
          </div>
        </AnimatedLink>
      </Link>
    </article>
  );
};

export default LearningActivitiesItem;

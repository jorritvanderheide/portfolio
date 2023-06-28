import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedLink from "@/components/AnimatedLink";
import type LearningActivitiesItemProps from "@/types/LearningActivitiesItemProps";

// learning activities item component
const LearningActivitiesItem: FunctionComponent<
  LearningActivitiesItemProps
> = ({ image, isPortrait, index, slug, title }) => {
  return (
    <article className="w-full">
      <Link
        href={`/learning-activities/${slug}`}
        passHref
      >
        <AnimatedLink>
          <div className={`flex flex-col gap-1`}>
            <figure className={`relative aspect-square h-auto w-full `}>
              <Image
                className="object-fit rounded-xl"
                src={image}
                alt={title}
                fill={true}
                priority={index! <= 5 ? true : false}
                sizes={`(min-width: 769px) 40vw, (min-width: 1921px) 25vw, 90vw)`}
              />
            </figure>
            <p className={`text-[0.9em] font-headings uppercase`}>{title}</p>
          </div>
        </AnimatedLink>
      </Link>
    </article>
  );
};

export default LearningActivitiesItem;

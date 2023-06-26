import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import type LearningActivitiesItemProps from "@/types/LearningActivitiesItemProps";
import AnimatedLink from "@/components/AnimatedLink";

const LearningActivitiesItem: FunctionComponent<
  LearningActivitiesItemProps
> = ({ image, isPortrait, key, slug, title }) => {
  return (
    <article className="mb-4 w-full">
      <Link href={`/learning-activities/${slug}`}>
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
                priority={key! <= 2 ? true : false}
                sizes={`(min-width: 769px) 40vw, (min-width: 1921px) 25vw, 90vw)`}
              />
            </figure>
            <p className="font-headings text-body uppercase">{title}</p>
          </div>
        </AnimatedLink>
      </Link>
    </article>
  );
};

export default LearningActivitiesItem;

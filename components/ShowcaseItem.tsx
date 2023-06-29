import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
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
    <article className="group h-full w-full basis-1/5 hover:basis-2/5">
      <div className="flex h-full w-full flex-col gap-3">
        <Link
          href={`/learning-activities/${slug}`}
          className="h-full"
          passHref
        >
          <figure className="relative h-full w-full overflow-hidden">
            <Image
              className="rounded-3xl object-cover"
              src={image}
              alt={title}
              fill={true}
              priority={priority}
            />
          </figure>
        </Link>
      </div>
    </article>
  );
};

export default ShowcaseItem;

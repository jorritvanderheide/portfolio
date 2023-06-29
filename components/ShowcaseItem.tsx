import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import type ShowcaseItemProps from "@/types/ShowcaseItemProps";

// showcase item component
const ShowcaseItem: FunctionComponent<ShowcaseItemProps> = ({
  image,
  priority,
  slug,
  title,
}) => {
  return (
    <article className="relative h-full w-full snap-center snap-always">
      <figure className="relative h-full w-full overflow-hidden">
        <Image
          className="object-cover"
          src={image}
          alt={title}
          fill={true}
          priority={priority}
        />
      </figure>
      <Link
        href={`/learning-activities/${slug}`}
        className="absolute bottom-2 right-2 max-w-[calc(100vw_-_4em)] text-center font-headings text-body font-medium oldstyle-nums text-white mix-blend-difference md:text-right select-none"
      >
        {title}
      </Link>
    </article>
  );
};

export default ShowcaseItem;

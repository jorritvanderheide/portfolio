import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import type ShowcaseItemProps from "@/types/ShowcaseItemProps";

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
        className="absolute bottom-2 left-2 max-w-[calc(100vw_-_4em)] font-headings font-medium uppercase oldstyle-nums text-white mix-blend-difference"
      >
        <p className="text-headings">{title}</p>
      </Link>
    </article>
  );
};

export default ShowcaseItem;

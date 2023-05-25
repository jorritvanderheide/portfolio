import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import type ShowcaseProps from "../types/ShowcaseProps";

const ShowcaseItem: FunctionComponent<ShowcaseProps> = ({
  src,
  title,
  url,
}) => {
  return (
    <article className="h-full w-full snap-center snap-always">
      <Link
        className="h-full w-full"
        href={`/portfolio/${url}`}
      >
        <figure className="relative h-full w-full overflow-hidden">
          <Image
            className="object-cover"
            src={src}
            alt={title}
            fill={true}
          />
          <h1 className="absolute bottom-2 right-2 font-display text-display font-medium text-white mix-blend-difference">
            {title}
          </h1>
        </figure>
      </Link>
    </article>
  );
};

export default ShowcaseItem;

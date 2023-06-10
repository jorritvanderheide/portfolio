import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import type ShowcaseProps from "../types/ShowcaseItemProps";

const ShowcaseItem: FunctionComponent<ShowcaseProps> = ({
  image,
  slug,
  title,
}) => {
  return (
    <article className="h-full w-full snap-center snap-always">
      <Link className="h-full w-full" href={`/portfolio/${slug}`}>
        <figure className="relative h-full w-full overflow-hidden">
          <Image className="object-cover" src={image} alt={title} fill={true} />
          <h1 className="absolute bottom-2 right-2 font-display text-display font-medium text-white mix-blend-difference">
            {title}
          </h1>
        </figure>
      </Link>
    </article>
  );
};

export default ShowcaseItem;

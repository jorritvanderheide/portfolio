import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
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
    <article className="h-full flex-shrink-0 snap-center snap-always pb-2 pt-9 md:pb-4 md:pt-7">
      <div className="flex h-full flex-col gap-3">
        <Link
          href={`/learning-activities/${slug}`}
          className="h-full"
          passHref
        >
          <figure className="relative h-full overflow-hidden">
            <Image
              className="rounded-3xl object-cover"
              src={image}
              alt={title}
              fill={true}
              priority={priority}
            />
          </figure>
        </Link>
        <div className="flex select-none justify-between gap-4 md:gap-0">
          <p className="font-sora font-semibold uppercase">{title}</p>
          <p className="font-sora font-medium uppercase">{index}/5</p>
        </div>
      </div>
    </article>
  );
};

export default ShowcaseItem;

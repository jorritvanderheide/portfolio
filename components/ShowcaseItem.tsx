import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedLink from "@/components/AnimatedLink";
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
        href={`/portfolio/${slug}`}
        className="absolute bottom-2 right-2 font-display text-display font-medium oldstyle-nums text-white mix-blend-difference"
      >
        <AnimatedLink>{title}</AnimatedLink>
      </Link>
    </article>
  );
};

export default ShowcaseItem;

import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import type PortfolioProps from "@/types/PortfolioItemProps";
import AnimatedLink from "@/components/AnimatedLink";

const PortfolioItem: FunctionComponent<PortfolioProps> = ({
  image,
  isPortrait,
  slug,
  title,
}) => {
  return (
    <AnimatedLink>
      <article className="mb-4 w-full">
        <Link href={`/portfolio/${slug}`}>
          <div className={`flex flex-col gap-1 ${isPortrait && "px-3"}`}>
            <figure className="relative w-full">
              {isPortrait ? (
                <Image
                  className="w-full object-cover"
                  src={image}
                  alt={title}
                  width={720}
                  height={1280}
                />
              ) : (
                <Image
                  className="w-full object-cover"
                  src={image}
                  alt={title}
                  width={1280}
                  height={720}
                />
              )}
            </figure>
            <p className="font-headings text-body uppercase">{title}</p>
          </div>
        </Link>
      </article>
    </AnimatedLink>
  );
};

export default PortfolioItem;

import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import type PortfolioProps from "@/types/PortfolioProps";

const PortfolioItem: FunctionComponent<PortfolioProps> = ({
  src,
  title,
  url,
}) => {
  return (
    <article>
      <Link href={`/portfolio/${url}`}>
        <div className="flex flex-col gap-2">
          <figure className="relative">
            <Image
              className="object-cover"
              src={src}
              alt={title}
              fill={true}
            />
          </figure>
          <p>{title}</p>
        </div>
      </Link>
    </article>
  );
};

export default PortfolioItem;

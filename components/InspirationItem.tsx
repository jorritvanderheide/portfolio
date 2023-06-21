import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import type InspirationItemProps from "@/types/InspirationItemProps";
import AnimatedLink from "@/components/AnimatedLink";

const InspirationItem: FunctionComponent<InspirationItemProps> = ({
  image,
  slug,
  title,
}) => {
  return (
    <AnimatedLink>
      <article className="mb-4 w-full">
        <div className={`flex flex-col gap-1`}>
          <figure className="relative w-full">
            <Image
              className="w-full object-cover"
              src={image}
              alt={title}
              width={1280}
              height={720}
            />
          </figure>
          <p className="font-headings text-body uppercase">{title}</p>
        </div>
      </article>
    </AnimatedLink>
  );
};

export default InspirationItem;

import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import type InspirationItemProps from "@/types/InspirationItemProps";
import AnimatedLink from "@/components/AnimatedLink";

const InspirationItem: FunctionComponent<InspirationItemProps> = ({
  description,
  image,
  title,
  url,
}) => {
  return (
    <article className="w-full">
      <Link href={url} rel="noreferrer noopener" target="_blank">
        <AnimatedLink className="flex flex-col items-center gap-2">
          <figure className="relative aspect-[4/3] h-auto w-full bg-red-500">
            <Image
              className="object-cover"
              src={image}
              alt={title}
              fill={true}
            />
          </figure>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <p className="font-headings text-body uppercase">{title}</p>
              <span className="material-icons !text-body">call_made</span>
            </div>
            <p className="font-headings text-body">{description}</p>
          </div>
        </AnimatedLink>
      </Link>
    </article>
  );
};

export default InspirationItem;

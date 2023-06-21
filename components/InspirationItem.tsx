import { FunctionComponent } from "react";
import Link from "next/link";
import type InspirationItemProps from "@/types/InspirationItemProps";
import AnimatedLink from "@/components/AnimatedLink";

const InspirationItem: FunctionComponent<InspirationItemProps> = ({
  description,
  image,
  slug,
  title,
  url,
}) => {
  return (
    <article className="w-full">
      <Link href={url} rel="noreferrer noopener" target="_blank">
        <AnimatedLink className="flex items-center gap-2">
          <p className="font-headings text-body">
            <span className="uppercase">{title};</span> {description}
          </p>
          <span className="material-icons h-full">call_made</span>
        </AnimatedLink>
      </Link>
    </article>
  );
};

export default InspirationItem;

import { FunctionComponent } from "react";
import Link from "next/link";
import AnimatedLink from "@/components/AnimatedLink";
import type InspirationItemProps from "@/types/InspirationItemProps";

// inspiration item component
const InspirationItem: FunctionComponent<InspirationItemProps> = ({
  description,
  title,
  url,
}) => {
  return (
    <article>
      <Link
        href={url}
        rel="noreferrer noopener"
        target="_blank"
        passHref
      >
        <AnimatedLink>
          <div
            className={`flex w-full flex-row items-center justify-between gap-2 md:gap-4`}
          >
            <div className="flex flex-col gap-1">
              <p className="font-headings text-subheadings font-semibold uppercase">
                {title}
              </p>
              <p className="font-headings text-body">{description}</p>
            </div>
            <span className="material-icons !text-body select-none">call_made</span>
          </div>
        </AnimatedLink>
      </Link>
    </article>
  );
};

export default InspirationItem;

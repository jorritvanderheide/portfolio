"use client";

import { FunctionComponent } from "react";
import Link from "next/link";
import type InspirationItemProps from "@/types/InspirationItemProps";

// inspiration item component
const InspirationItem: FunctionComponent<InspirationItemProps> = ({
  description,
  title,
  url,
}) => {
  return (
    <article>
      <Link href={url} rel="noreferrer noopener" target="_blank" passHref>
        <div className="flex w-full flex-row items-center justify-between gap-2 md:gap-4">
          <div className="flex flex-col gap-1">
            <p className="font-headings text-body uppercase">{title}</p>
            <p className="font-headings text-body">{description}</p>
          </div>
          <span className="material-icons !text-body">call_made</span>
        </div>
      </Link>
    </article>
  );
};

export default InspirationItem;

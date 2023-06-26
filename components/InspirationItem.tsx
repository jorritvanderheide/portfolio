"use client";

import { FunctionComponent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type InspirationItemProps from "@/types/InspirationItemProps";
import AnimatedLink from "@/components/AnimatedLink";

const InspirationItem: FunctionComponent<InspirationItemProps> = ({
  description,
  title,
  url,
}) => {
  return (
    <article className="h-full w-full snap-center snap-always hover:cursor-pointer">
      <Link href={url} rel="noreferrer noopener" target="_blank">
        <div className="flex w-full flex-row items-center justify-between gap-4">
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

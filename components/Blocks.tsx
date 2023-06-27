import { FunctionComponent } from "react";
import Link from "next/link";
import type BlockProps from "@/types/BlockProps";

// h1 block component
export const H1: FunctionComponent<BlockProps> = ({ children, className }) => {
  return (
    <h1
      className={`w-full font-headings text-body font-bold lowercase ${className}`}
    >
      {children}
    </h1>
  );
};

// h2 block component
export const H2: FunctionComponent<BlockProps> = ({ children, className }) => {
  return (
    <h2
      className={`w-full font-headings text-body font-medium lowercase ${className}`}
    >
      {children}
    </h2>
  );
};

// p block component
export const P: FunctionComponent<BlockProps> = ({ children, className }) => {
  return (
    <p className={`w-full font-body text-body ${className}`}>{children}</p>
  );
};

// figure block component
export const Figure: FunctionComponent<BlockProps> = ({
  children,
  className,
}) => {
  return (
    <figure
      className={`my-2 aspect-auto h-auto w-full md:-mx-4 md:w-[calc(100%_+_8em)] ${className}`}
    >
      {children}
    </figure>
  );
};

// link block component
export const A: FunctionComponent<BlockProps> = ({
  children,
  className,
  href,
}) => {
  const linkElements: string[] = href.split("/");
  const link: string =
    "/learning-activities/" + linkElements[linkElements.length - 1];

  return (
    <Link
      className={`custom-link bg-gradient-to-b from-[white_50%] to-[#d9d9d9_50%] ${className}`}
      href={link}
      target="_blank"
    >
      {children}
    </Link>
  );
};

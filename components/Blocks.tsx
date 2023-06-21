import { FunctionComponent } from "react";
import type BlockProps from "@/types/BlockProps";

export const H1: FunctionComponent<BlockProps> = ({ children, className }) => {
  return (
    <h1
      className={`w-full font-headings text-body font-bold lowercase ${className}`}
    >
      {children}
    </h1>
  );
};

export const H2: FunctionComponent<BlockProps> = ({ children, className }) => {
  return (
    <h2
      className={`w-full font-headings text-body font-medium lowercase ${className}`}
    >
      {children}
    </h2>
  );
};

export const P: FunctionComponent<BlockProps> = ({ children, className }) => {
  return (
    <p className={`w-full font-body text-body ${className}`}>{children}</p>
  );
};

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

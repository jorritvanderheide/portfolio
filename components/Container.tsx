import { FunctionComponent } from "react";
import type ContainerProps from "@/types/ContainerProps";

const Container: FunctionComponent<ContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`mx-auto flex max-w-prose flex-col items-center gap-1 px-2 text-left ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;

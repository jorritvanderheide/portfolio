import { FunctionComponent } from "react";
import type ContainerProps from "@/types/ContainerProps";

const Container: FunctionComponent<ContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`w-max-prose mx-auto flex flex-col items-center px-1 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;

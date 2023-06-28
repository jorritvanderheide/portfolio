import { FunctionComponent } from "react";
import type LoadingItemProps from "@/types/LoadingItemProps";

// loading item component
const LoadingItem: FunctionComponent<LoadingItemProps> = ({
  isPortrait,
  title,
}) => {
  return (
    <article className="mb-4 w-full">
      <div className={`flex flex-col gap-1 ${isPortrait && "px-3"}`}>
        <figure
          className={`relative h-auto w-full bg-gray-200 dark:bg-gray-800 ${
            isPortrait ? "aspect-[3/4]" : "aspect-[4/3]"
          }`}
        ></figure>
        <p
          className={`font-headings text-body uppercase line-through decoration-gray-200 decoration-[1.25em] dark:decoration-gray-800`}
        >
          {title}
        </p>
      </div>
    </article>
  );
};

export default LoadingItem;

"use client";

import Masonry from "react-masonry-css";
import LoadingItem from "@/components/LoadingItem";

const breakpoints = {
  default: 3,
  1920: 2,
  768: 1,
};

const Loading = () => {
  return (
    <section>
      <div className="mx-auto mt-2 max-w-[80%] animate-pulse select-none">
        <Masonry
          breakpointCols={breakpoints}
          className="masonry"
          columnClassName="masonry-col"
        >
          <LoadingItem
            isPortrait={false}
            title={"Final Master Project 2 - Envisioning Eindhoven"}
          />
          <LoadingItem
            isPortrait={true}
            title={"Final Master Project 1 - Rhizome"}
          />
          <LoadingItem
            isPortrait={false}
            title={"M2.1 project design - Repo*duction"}
          />
          <LoadingItem
            isPortrait={false}
            title={"Polar Bearings"}
          />
          <LoadingItem
            isPortrait={false}
            title={"A designerly perspective on IoT"}
          />
          <LoadingItem
            isPortrait={true}
            title={"Designing with Advanced Artificial Intelligence"}
          />
        </Masonry>
        ;
      </div>
    </section>
  );
};

export default Loading;

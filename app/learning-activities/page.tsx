"use client";

import { Suspense } from "react";
import Masonry from "react-masonry-css";
import LearningActivitiesGrid from "@/components/LearningActivitiesGrid";
import LoadingItem from "@/components/LoadingItem";

const breakpoints = {
  default: 3,
  1920: 2,
  768: 1,
};

// learning activities page
const LearningActivitiesPage = async () => {
  return (
    <section>
      <div className="mx-auto mt-2 max-w-[80%]">
        <Suspense fallback={<LoadingGrid />}>
          {/* @ts-expect-error Server Component */}
          <LearningActivitiesGrid />
        </Suspense>
      </div>
    </section>
  );
};

export default LearningActivitiesPage;

// loading page for learning activities
const LoadingGrid = () => {
  return (
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
  );
};

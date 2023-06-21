"use client";

import Masonry from "react-masonry-css";
import LearningActivitiesItem from "@/components/LearningActivitiesItem";
import type LearningActivitiesItemProps from "@/types/LearningActivitiesItemProps";

const getLearningActivitiesItems = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/learning-activities`
  );

  const data = await response.json();

  return data;
};

const LearningActivitiesGrid = async () => {
  const breakpoints = {
    default: 3,
    2560: 2,
    500: 1,
  };

  const learningActivitiesItems = await getLearningActivitiesItems();

  return (
    <div className="mx-auto max-w-[80%]">
      <Masonry
        breakpointCols={breakpoints}
        className="masonry"
        columnClassName="masonry-col"
      >
        {learningActivitiesItems?.map(
          (
            learningActivitiesItem: LearningActivitiesItemProps,
            index: number
          ) => (
            <LearningActivitiesItem
              key={index}
              image={learningActivitiesItem.image}
              isPortrait={learningActivitiesItem.isPortrait}
              slug={learningActivitiesItem.slug}
              title={learningActivitiesItem.title}
            />
          )
        )}
      </Masonry>
    </div>
  );
};

export default LearningActivitiesGrid;

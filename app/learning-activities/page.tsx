"use client";

import Masonry from "react-masonry-css";
import LearningActivitiesItem from "@/components/LearningActivitiesItem";
import type LearningActivitiesItemProps from "@/types/LearningActivitiesItemProps";

const breakpoints = {
  default: 3,
  1920: 2,
  768: 1,
};

// fetch learning activities items from api
const getLearningActivitiesItems = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/learning-activities`
  );

  if (!response.ok) {
    throw new Error(`Server responded with status: ${response.status}`);
  }

  const data = await response.json();

  return data;
};

// learning activities page
const LearningActivitiesPage = async () => {
  const learningActivitiesItems = await getLearningActivitiesItems();

  return (
    <section>
      <div className="mx-auto mt-2 max-w-[80%]">
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
    </section>
  );
};

export default LearningActivitiesPage;

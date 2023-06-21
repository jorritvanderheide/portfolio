"use client";

import Masonry from "react-masonry-css";
import InspirationItem from "@/components/InspirationItem";
import type InspirationItemProps from "@/types/InspirationItemProps";

const getInspirationItems = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/inspiration`
  ).then((res) => res.json());

  if (!response.ok) {
    throw new Error(`Server responded with status: ${response.status}`);
  }

  const data = await response.json();

  return data;
};

const InspirationGrid = async () => {
  const breakpoints = {
    default: 3,
    2560: 2,
    500: 1,
  };

  const inspirationItems = await getInspirationItems();

  return (
    <div className="mx-auto max-w-[80%]">
      <Masonry
        breakpointCols={breakpoints}
        className="masonry"
        columnClassName="masonry-col"
      >
        {inspirationItems?.map(
          (inspirationItem: InspirationItemProps, index: number) => (
            <InspirationItem
              key={index}
              image={inspirationItem.image}
              slug={inspirationItem.slug}
              title={inspirationItem.title}
            />
          )
        )}
      </Masonry>
    </div>
  );
};

export default InspirationGrid;

"use client";

import Masonry from "react-masonry-css";
import PortfolioItem from "@/components/PortfolioItem";
import type PortfolioProps from "@/types/PortfolioItemProps";

const getPortfolioItems = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/portfolio`
  ).then((res) => res.json());

  return response;
};

const PortfolioGallery = async () => {
  const portfolioArray = await getPortfolioItems();
  const reverseArray = portfolioArray.reverse();

  return (
    <div className="mx-auto max-w-[80%]">
      <Masonry
        breakpointCols={2}
        className="masonry"
        columnClassName="masonry-col"
      >
        {reverseArray?.map((item: PortfolioProps, index: number) => (
          <PortfolioItem
            key={index}
            image={item.image}
            isPortrait={item.isPortrait}
            slug={item.slug}
            title={item.title}
          />
        ))}
      </Masonry>
    </div>
  );
};

export default PortfolioGallery;

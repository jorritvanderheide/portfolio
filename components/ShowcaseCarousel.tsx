import ShowcaseItem from "./ShowcaseItem";
import type ShowcaseProps from "@/types/ShowcaseProps";

const getShowcaseItems = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/showcase`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

const ShowcaseCarousel = async () => {
  const showcaseArray = await getShowcaseItems();

  return (
    <div className="h-full w-full snap-y snap-mandatory overflow-y-scroll">
      {showcaseArray?.map((item: ShowcaseProps, index: number) => (
        <ShowcaseItem
          key={index}
          src={item.src}
          title={item.title}
          url={item.url}
        />
      ))}
    </div>
  );
};

export default ShowcaseCarousel;

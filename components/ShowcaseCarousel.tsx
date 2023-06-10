import ShowcaseItem from "./ShowcaseItem";
import type ShowcaseProps from "@/types/ShowcaseItemProps";

const getShowcaseItems = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/showcase`
  ).then((res) => res.json());

  return response;
};

const ShowcaseCarousel = async () => {
  const showcaseArray = await getShowcaseItems();

  return (
    <div className="h-full w-full snap-y snap-mandatory overflow-y-scroll">
      {showcaseArray?.map((item: ShowcaseProps, index: number) => (
        <ShowcaseItem
          key={index}
          image={item.image}
          title={item.title}
          slug={item.slug}
        />
      ))}
    </div>
  );
};

export default ShowcaseCarousel;

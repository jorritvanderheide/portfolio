import ShowcaseItem from "./ShowcaseItem";
import { getPlaiceholder } from "plaiceholder";
import type ShowcaseItemProps from "@/types/ShowcaseItemProps";

const getShowcaseItems = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/showcase`
  ).then((res) => res.json());

  response.map((item: any) => ({
    ...item,
    placeholder: getPlaiceholder(item.image).then((res) => res.base64),
  }));

  return response;
};

const ShowcaseCarousel = async () => {
  const showcaseArray = await getShowcaseItems();

  return (
    <div className="h-full w-full snap-y snap-mandatory overflow-y-scroll">
      {showcaseArray?.map((item: ShowcaseItemProps, index: number) => (
        <ShowcaseItem
          key={index}
          image={item.image}
          placeholder={item.placeholder}
          title={item.title}
          slug={item.slug}
        />
      ))}
    </div>
  );
};

export default ShowcaseCarousel;

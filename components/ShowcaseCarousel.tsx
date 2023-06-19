import ShowcaseItem from "@/components/ShowcaseItem";
import type ShowcaseItemProps from "@/types/ShowcaseItemProps";

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
      {showcaseArray?.map((item: ShowcaseItemProps, index: number) => (
        <ShowcaseItem
          key={index}
          image={item.image}
          priority={index === 0 ? true : false}
          slug={item.slug}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default ShowcaseCarousel;

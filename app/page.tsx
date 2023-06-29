import ShowcaseItem from "@/components/ShowcaseItem";
import type ShowcaseItemProps from "@/types/ShowcaseItemProps";

// fetch showcase items from api
const getShowcaseItems = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/showcase`
  );

  if (!response.ok) {
    throw new Error(`Server responded with status: ${response.status}`);
  }

  const data = await response.json();

  return data;
};

// showcase page
const ShowcasePage = async () => {
  const showcaseArray = await getShowcaseItems();

  return (
    <section className="mb-4 mt-2 h-[calc(100svh_-_14em)] px-0 md:h-[calc(100vh_-_11em)]">
      <div className="mx-auto flex h-full w-full flex-col gap-2 px-2 md:flex-row md:px-4">
        {showcaseArray?.map((item: ShowcaseItemProps, index: number) => (
          <ShowcaseItem
            key={index}
            image={item.image}
            index={index + 1}
            priority={index === 0 ? true : false}
            slug={item.slug}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default ShowcasePage;

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
    <section className="-mt-header-mobile h-[100svh] w-screen md:-mt-header">
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
    </section>
  );
};

export default ShowcasePage;

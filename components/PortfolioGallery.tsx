import PortfolioItem from "@/components/PortfolioItem";
import type PortfolioProps from "@/types/PortfolioProps";

const getPortfolioItems = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/portfolio`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

const PortfolioGallery = async () => {
  const portfolioArray = await getPortfolioItems();

  return (
    <div className="columns-masonry gap-6 px-2">
      {portfolioArray?.map((item: PortfolioProps, index: number) => (
        <PortfolioItem
          key={index}
          isPortrait={item.isPortrait}
          src={item.src}
          title={item.title}
          url={item.url}
        />
      ))}
    </div>
  );
};

export default PortfolioGallery;

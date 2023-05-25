import PortfolioGallery from "@/components/PortfolioGallery";

const Portfolio = () => {
  return (
    <div>
      {/* @ts-expect-error Async Server Component */}
      <PortfolioGallery />
    </div>
  );
};

export default Portfolio;

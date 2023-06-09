import PortfolioGallery from "@/components/PortfolioGallery";

const Portfolio = () => {
  return (
    <section>
      {/* @ts-expect-error Async Server Component */}
      <PortfolioGallery />
    </section>
  );
};

export default Portfolio;

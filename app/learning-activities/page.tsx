import PortfolioGallery from "@/components/PortfolioGallery";

const PortfolioPage = () => {
  return (
    <section>
      {/* @ts-expect-error Async Server Component */}
      <PortfolioGallery />
    </section>
  );
};

export default PortfolioPage;

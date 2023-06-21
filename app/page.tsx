import ShowcaseCarousel from "@/components/ShowcaseCarousel";

const ShowcasePage = () => {
  return (
    <div className="-mt-header-mobile h-[100svh] w-screen md:-mt-header">
      {/* @ts-expect-error Async Server Component */}
      <ShowcaseCarousel />
    </div>
  );
};

export default ShowcasePage;

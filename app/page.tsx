import ShowcaseCarousel from "@/components/ShowcaseCarousel";

const ShowcasePage = () => {
  return (
    <div className="-mt-header h-[100svh] w-screen">
      {/* @ts-expect-error Async Server Component */}
      <ShowcaseCarousel />
    </div>
  );
};

export default ShowcasePage;

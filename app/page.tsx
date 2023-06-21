import ShowcaseCarousel from "@/components/ShowcaseCarousel";

const ShowcasePage = () => {
  return (
    <section className="-mt-header-mobile h-[100dvh] w-screen md:-mt-header">
      {/* @ts-expect-error Async Server Component */}
      <ShowcaseCarousel />
    </section>
  );
};

export default ShowcasePage;

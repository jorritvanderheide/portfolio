import ShowcaseCarousel from "@/components/ShowcaseCarousel";

const Home = () => {
  return (
    <div className="-mt-header h-[100svh] w-screen">
      {/* @ts-expect-error Async Server Component */}
      <ShowcaseCarousel />
    </div>
  );
};

export default Home;

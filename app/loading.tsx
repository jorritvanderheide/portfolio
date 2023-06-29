const Loading = () => {
  return (
    <section className="mx-auto -mt-header-mobile h-[100svh] w-screen animate-pulse px-2 md:-mt-header md:px-4">
      <article className="h-full pb-2 pt-9 md:pb-4 md:pt-7">
        <div className="flex h-full flex-col gap-3">
          <figure className="relative h-full w-full overflow-hidden rounded-3xl bg-gray-200 dark:bg-gray-800"></figure>
          <div className="flex select-none justify-between gap-4 line-through decoration-gray-300 decoration-[1.25em] dark:decoration-gray-700 md:gap-0">
            <p className="font-sora font-semibold uppercase">
              final master project 2 - envisioning eindhoven
            </p>
            <p className="font-sora font-medium uppercase">1/5</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Loading;

const Loading = () => {
  return (
    <section className="mb-4 mt-2 h-[calc(100svh_-_14em)] animate-pulse px-0 md:h-[calc(100vh_-_11em)]">
      <div className="mx-auto flex h-full w-full flex-col gap-2 px-2 md:flex-row md:px-4">
        <article className=" h-full w-full basis-1/5">
          <div className="flex h-full w-full flex-col gap-3">
            <figure className="relative h-full w-full overflow-hidden rounded-3xl bg-gray-200 dark:bg-gray-800"></figure>
          </div>
        </article>

        <article className=" h-full w-full basis-1/5">
          <div className="flex h-full w-full flex-col gap-3">
            <figure className="relative h-full w-full overflow-hidden rounded-3xl bg-gray-200 dark:bg-gray-800"></figure>
          </div>
        </article>

        <article className=" h-full w-full basis-1/5">
          <div className="flex h-full w-full flex-col gap-3">
            <figure className="relative h-full w-full overflow-hidden rounded-3xl bg-gray-200 dark:bg-gray-800"></figure>
          </div>
        </article>

        <article className=" h-full w-full basis-1/5">
          <div className="flex h-full w-full flex-col gap-3">
            <figure className="relative h-full w-full overflow-hidden rounded-3xl bg-gray-200 dark:bg-gray-800"></figure>
          </div>
        </article>

        <article className=" h-full w-full basis-1/5">
          <div className="flex h-full w-full flex-col gap-3">
            <figure className="relative h-full w-full overflow-hidden rounded-3xl bg-gray-200 dark:bg-gray-800"></figure>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Loading;

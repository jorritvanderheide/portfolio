const Loading = () => {
  return (
    <section className="-mt-header-mobile h-[100svh] w-screen animate-pulse select-none md:-mt-header">
      <article className="relative h-full w-full">
        <figure className="relative h-full w-full overflow-hidden bg-gray-200 dark:bg-gray-800"></figure>
        <div className="absolute bottom-2 right-2 max-w-[calc(100vw_-_4em)] text-center font-headings text-body font-medium oldstyle-nums line-through decoration-gray-300 decoration-[1.25em] dark:decoration-gray-700 md:text-right">
          final master project 2 - envisioning eindhoven
        </div>
      </article>
    </section>
  );
};

export default Loading;

const Loading = () => {
  return (
    <section className="mx-auto mb-4 mt-2 animate-pulse select-none px-0 md:max-w-[133vh] md:px-4">
      <div className="mx-2 flex items-end md:mx-0 md:-mt-header md:min-h-[75svh]">
        <h1 className="w-full font-headings text-headings font-medium uppercase line-through decoration-gray-200 decoration-[1.1em] dark:decoration-gray-800">
          final master project 2 - envisioning eindhoven
        </h1>
      </div>
      <figure
        className={`dark:bg-gray-800s relative my-4 aspect-[4/3] h-auto w-full bg-gray-200 md:rounded-xl`}
      ></figure>
    </section>
  );
};

export default Loading;

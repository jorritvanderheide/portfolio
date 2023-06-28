import LoadingItem from "@/components/LoadingItem";

const Loading = () => {
  return (
    <section>
      <div className="mx-auto mb-4 mt-2 max-w-[80%] animate-pulse select-none">
        <div className="grid grid-cols-1 items-center justify-center gap-4 md:grid-cols-2 3xl:grid-cols-3">
          <LoadingItem
            isPortrait={false}
            title={"Final Master Project 2 - Envisioning Eindhoven"}
          />
          <LoadingItem
            isPortrait={true}
            title={"Final Master Project 1 - Rhizome"}
          />
          <LoadingItem
            isPortrait={false}
            title={"M2.1 project design - Repo*duction"}
          />
          <LoadingItem
            isPortrait={false}
            title={"Polar Bearings"}
          />
          <LoadingItem
            isPortrait={false}
            title={"A designerly perspective on IoT"}
          />
          <LoadingItem
            isPortrait={true}
            title={"Designing with Advanced Artificial Intelligence"}
          />
        </div>
      </div>
    </section>
  );
};

export default Loading;

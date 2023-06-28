import LearningActivitiesItem from "@/components/LearningActivitiesItem";
import type LearningActivitiesItemProps from "@/types/LearningActivitiesItemProps";

// fetch learning activities items from api
const getLearningActivitiesItems = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/learning-activities`
  );

  if (!response.ok) {
    throw new Error(`Server responded with status: ${response.status}`);
  }

  const data = await response.json();

  return data;
};

// learning activities page
const LearningActivitiesPage = async () => {
  const learningActivitiesItems = await getLearningActivitiesItems();

  return (
    <section>
      <div className="mx-auto mb-4 mt-2 max-w-[80%]">
        <div className="grid grid-cols-1 items-center justify-center gap-4 md:grid-cols-2 3xl:grid-cols-3">
          {learningActivitiesItems?.map(
            (
              learningActivitiesItem: LearningActivitiesItemProps,
              index: number
            ) => (
              <LearningActivitiesItem
                key={index}
                image={learningActivitiesItem.image}
                index={index}
                isPortrait={learningActivitiesItem.isPortrait}
                slug={learningActivitiesItem.slug}
                title={learningActivitiesItem.title}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default LearningActivitiesPage;

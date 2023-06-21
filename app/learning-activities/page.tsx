"use client";

import LearningActivitiesGrid from "@/components/LearningActivitiesGrid";

const LearningActivitiesPage = () => {
  return (
    <section>
      {/* @ts-expect-error Async Server Component */}
      <LearningActivitiesGrid />
    </section>
  );
};

export default LearningActivitiesPage;

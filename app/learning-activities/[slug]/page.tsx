import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Container from "@/components/Container";
import AnimatedLink from "@/components/AnimatedLink";
import AreasOfExpertise from "@/components/AreasOfExpertise";
import { H1, H2, P, Figure, A } from "@/components/Blocks";
import type LearningActivityProps from "@/types/LearningActivityProps";
import type LearningActivitiesItemProps from "@/types/LearningActivitiesItemProps";

// generate static paths for learning activity pages
export const generateStaticParams = async () => {
  const learningActivities = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/learning-activities`
  ).then((res) => res.json());

  return learningActivities.map(
    (learningActivity: LearningActivitiesItemProps) => ({
      slug: learningActivity.slug,
    })
  );
};

// fetch learning activity from api
const getLearningActivity = async (slug: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/learning-activities/${slug}`
  );

  if (!response.ok) {
    throw new Error(`Server responded with status: ${response.status}`);
  }

  const data = await response.json();

  return data;
};

// learning activity page
const LearningActivityPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { slug } = params;
  const learningActivity: LearningActivityProps = await getLearningActivity(
    slug
  );

  return (
    <section className="mx-auto mb-4 mt-2 px-0 md:max-w-[133vh] md:px-4">
      <div className="mx-2 flex items-end md:mx-0">
        <div className="flex w-[calc(100vw_-_4em)] justify-between gap-2 md:w-full">
          <h1 className="-mb-[0.25em] w-full select-none font-headings text-headings font-medium uppercase">
            {learningActivity.title}
          </h1>
          {learningActivity.logo && (
            <figure className="relative aspect-square h-auto w-[10vw] self-end bg-gray-50 dark:bg-gray-900 md:w-[5vw]">
              <Image
                className="object-contain mix-blend-difference"
                src={learningActivity.logo}
                alt="client logo"
                fill={true}
                priority={true}
                sizes="10vw"
              />
            </figure>
          )}
        </div>
      </div>
      <figure
        className={`relative mb-4 mt-[4.25em] h-auto w-full ${
          learningActivity.isPortrait ? "aspect-[3/4]" : "aspect-[4/3]"
        }`}
      >
        <Image
          className="object-cover md:rounded-3xl"
          src={learningActivity.image}
          alt={learningActivity.title}
          fill={true}
          priority={true}
          sizes={`(min-width: 768px) 90vw, 100vw)`}
        />
      </figure>
      <Container>
        <AreasOfExpertise
          areas={learningActivity.areas}
          className="hidden md:block"
        />
        <ReactMarkdown
          // eslint-disable-next-line react/no-children-prop
          children={learningActivity.markdown}
          components={{
            h1: ({ node, ...props }) => <H1 {...props} />,
            h2: ({ node, ...props }) => <H2 {...props} />,
            p: ({ node, ...props }) => <P {...props} />,
            img: ({ node, ...props }) => <Figure {...props} />,
            a: ({ node, ...props }) => <A {...props} />,
          }}
        />
        {learningActivity.hasReport && (
          <div className="mt-2 w-full select-none">
            <Link
              className="flex items-center font-headings text-body font-medium uppercase"
              href={`/files/${slug}.pdf`}
              target="_blank"
              passHref
            >
              <AnimatedLink>Read the full report</AnimatedLink>
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
};

export default LearningActivityPage;

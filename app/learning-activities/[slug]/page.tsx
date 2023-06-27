import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Container from "@/components/Container";
import { H1, H2, P, Figure, A } from "@/components/Blocks";
import AnimatedLink from "@/components/AnimatedLink";
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
    <section className="mx-auto mb-4 mt-2 px-0 md:px-4">
      <div className="mx-2 flex items-end md:mx-0 md:-mt-header md:min-h-[75svh]">
        <h1 className="font-headings text-headings font-medium uppercase">
          {learningActivity.title}
        </h1>
      </div>
      <figure
        className={`relative my-4 h-auto w-full ${
          learningActivity.isPortrait ? "aspect-[3/4]" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={learningActivity.image}
          alt={learningActivity.title}
          fill={true}
          priority={true}
          sizes={`(min-width: 768px) 90vw, 100vw)`}
        />
      </figure>
      <Container>
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
          <div className="mt-2 w-full">
            <Link
              className="flex items-center font-headings text-display uppercase"
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

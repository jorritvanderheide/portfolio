import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Container from "@/components/Container";
import { H1, H2, P, Figure } from "@/components/Blocks";
import AnimatedLink from "@/components/AnimatedLink";
import type LearningActivityProps from "@/types/LearningActivityProps";
import type LearningActivitiesItemProps from "@/types/LearningActivitiesItemProps";

// export const generateStaticParams = async () => {
//   const learningActivities = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/learning-activities`
//   ).then((res) => res.json());

//   return learningActivities.map(
//     (learningActivity: LearningActivitiesItemProps) => ({
//       slug: learningActivity.slug,
//     })
//   );
// };

const getLearningActivity = async (slug: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/learning-activities/${slug}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

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
    <section className="mx-auto mb-5 max-w-[80%]">
      <div className="flex items-end md:-mt-header md:h-[90svh]">
        <h1 className="mb-1 font-headings text-headings font-medium uppercase">
          {learningActivity.title}
        </h1>
      </div>
      <figure className="mb-5">
        <Image
          src={learningActivity.image}
          alt={learningActivity.title}
          width={3840}
          height={2160}
          priority={true}
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
            img: ({ node, ...props }) => (
              <Figure>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="image" width={3840} height={2160} {...props} />
              </Figure>
            ),
          }}
        />
        {learningActivity.hasReport && (
          <div className="mt-2 w-full">
            <Link
              className="flex items-center font-headings text-display uppercase"
              href={`/files/${slug}.pdf`}
              target="_blank"
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

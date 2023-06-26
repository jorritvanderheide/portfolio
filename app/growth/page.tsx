import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Container from "@/components/Container";
import { H1, H2, P, Figure } from "@/components/Blocks";
import type PageContentProps from "@/types/PageContentProps";

const getPageContent = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/growth`
  );

  if (!response.ok) {
    throw new Error(`Server responded with status: ${response.status}`);
  }

  const data = await response.json();

  return data;
};

const Growth = async () => {
  const pageContent: PageContentProps = await getPageContent();

  return (
    <section className="mx-auto mb-4 mt-2 px-0 md:px-4">
      <div className="mx-2 flex items-end md:mx-0 md:-mt-header md:min-h-[75svh]">
        <h1 className="font-headings text-headings font-medium uppercase">
          {pageContent.title}
        </h1>
      </div>
      <figure
        className={`relative my-4 h-auto w-full ${
          pageContent.isPortrait ? "aspect-[3/4]" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={pageContent.image}
          alt={pageContent.title}
          fill={true}
          priority={true}
          sizes={`(min-width: 768px) 90vw, 100vw)`}
        />
      </figure>
      <Container>
        <ReactMarkdown
          // eslint-disable-next-line react/no-children-prop
          children={pageContent.markdown}
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
      </Container>
    </section>
  );
};

export default Growth;

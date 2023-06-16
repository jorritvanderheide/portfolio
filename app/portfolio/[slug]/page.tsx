import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Container from "@/components/Container";
import type PortfolioItemPageProps from "@/types/PortfolioItemPageProps";
import type PortfolioItemProps from "@/types/PortfolioItemProps";

export const generateStaticParams = async () => {
  const portfolioItems = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/portfolio`
  ).then((res) => res.json());

  return portfolioItems.map((portfolioItem: PortfolioItemProps) => ({
    slug: portfolioItem.slug,
  }));
};

const getPortfolioItem = async (slug: string) => {
  const portfolioItemData = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/portfolio/${slug}`
  ).then((res) => res.json());

  return portfolioItemData;
};

const PortfolioItemPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const data: PortfolioItemPageProps = await getPortfolioItem(slug);

  return (
    <section className="mx-auto mb-5 max-w-[80%]">
      <div className="-mt-header flex h-[90svh] items-end">
        <h1 className="mb-1 font-headings text-headings font-medium uppercase">
          {data.title}
        </h1>
      </div>
      <figure className="mb-5">
        <Image
          src={data.image}
          alt={data.title}
          width={3840}
          height={2160}
          priority={true}
        />
      </figure>
      <Container>
        <ReactMarkdown
          // eslint-disable-next-line react/no-children-prop
          children={data.markdown}
          components={{
            h1: ({ node, ...props }) => (
              <h2 className="font-headings text-body" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h3 className="font-headings text-body" {...props} />
            ),
            p: ({ node, ...props }) => <p className=" text-body" {...props} />,
            // img: ({ node, ...props }) => (
            //   <figure className="aspect-auto h-auto w-full">
            //     <Image className="" alt="image" fill={true} {...props} />
            //   </figure>
            // ),
          }}
        />
        {data.hasReport && (
          <Link
            className="mt-1 w-full font-headings text-display uppercase"
            href={`/reports/${slug}`}
          >
            Read the full report
          </Link>
        )}
      </Container>
    </section>
  );
};

export default PortfolioItemPage;

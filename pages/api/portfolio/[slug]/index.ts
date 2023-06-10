import notion from "@/lib/notion/notion";
import { NotionToMarkdown } from "notion-to-md";
import type { NextApiRequest, NextApiResponse } from "next";
import type { MdBlock, MdStringObject } from "notion-to-md/build/types";
import type PortfolioItemPageProps from "@/types/PortfolioItemPageProps";

const n2m = new NotionToMarkdown({ notionClient: notion });

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = req.query.slug as string;
  const data = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_PROJECTS!,
    filter: {
      and: [
        {
          property: "Published",
          checkbox: {
            equals: true,
          },
        },
        {
          property: "Slug",
          rich_text: {
            equals: slug,
          },
        },
      ],
    },
  });

  const metadata = data.results[0];

  let description: string = "";
  let hasReport: boolean = false;
  let image: string = "";
  let title: string = "";

  if ("properties" in metadata) {
    if ("Description" in metadata.properties) {
      if ("rich_text" in metadata.properties.Description)
        description = metadata.properties.Description.rich_text[0].plain_text;
    }
    if ("HasReport" in metadata.properties) {
      if ("checkbox" in metadata.properties.HasReport)
        hasReport = metadata.properties.HasReport.checkbox;
    }
    if ("title" in metadata.properties.Name) {
      title = metadata.properties.Name.title[0].plain_text;
    }
  }
  if ("cover" in metadata) {
    if ("external" in metadata.cover!) {
      image = metadata.cover.external.url;
    }
  }

  const contentBlocks: MdBlock[] = await n2m.pageToMarkdown(data.results[0].id);
  const contentString: MdStringObject = n2m.toMarkdownString(contentBlocks);

  const portfolioItem: PortfolioItemPageProps = {
    description: description,
    hasReport: hasReport,
    image: image,
    markdown: contentString,
    title: title,
  };

  res.json(portfolioItem);
}

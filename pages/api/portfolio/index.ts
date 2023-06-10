import notion from "@/lib/notion/notion";
import type { NextApiRequest, NextApiResponse } from "next";
import type PortfolioItemProps from "@/types/PortfolioItemProps";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_PROJECTS!,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "Index",
        direction: "ascending",
      },
    ],
  });

  let portfolioArray: PortfolioItemProps[] = [];
  data.results.map((item: any) => {
    portfolioArray.push({
      image: item.cover.external.url,
      isPortrait: item.properties.Portrait.checkbox,
      slug: item.properties.Slug.rich_text[0].plain_text,
      title: item.properties.Name.title[0].plain_text,
    });
  });

  res.json(portfolioArray);
}

import notion from "@/lib/notion/notion";
import type { NextApiRequest, NextApiResponse } from "next";
import type PortfolioProps from "@/types/PortfolioProps";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_PROJECTS,
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

  let portfolioArray: PortfolioProps[] = [];
  data.results.map((item: any) => {
    portfolioArray.push({
      isPortrait: item.properties.Portrait.checkbox,
      src: item.cover.external.url,
      title: item.properties.Name.title[0].plain_text,
      url: item.properties.Slug.rich_text[0].plain_text,
    });
  });

  res.json(portfolioArray);
}

import notion from "@/lib/notion/notion";
import type { NextApiRequest, NextApiResponse } from "next";
import type ShowcaseItemProps from "@/types/ShowcaseItemProps";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
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
          property: "Showcase",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });

  let showcaseArray: ShowcaseItemProps[] = [];
  data.results.map((item: any) => {
    showcaseArray.push({
      image: item.cover.external.url,
      slug: item.properties.Slug.rich_text[0].plain_text,
      title: item.properties.Name.title[0].plain_text,
    });
  });

  res.json(showcaseArray);
}

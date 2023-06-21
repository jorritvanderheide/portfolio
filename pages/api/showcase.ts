import notion from "@/lib/notion/notion";
import type { NextApiRequest, NextApiResponse } from "next";
import type ShowcaseItemProps from "@/types/ShowcaseItemProps";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_LEARNING_ACTIVITIES!,
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

    let showcaseItems: ShowcaseItemProps[] = [];
    data.results.map((item: any) => {
      showcaseItems.push({
        image: item.cover.external.url,
        slug: item.properties.Slug.rich_text[0].plain_text,
        title: item.properties.Name.title[0].plain_text.toLowerCase(),
      });
    });

    res.status(200).json(showcaseItems);
  } catch (error) {
    console.error("Error fetching content:", error);
    res.status(500).json({ error: "An error occurred fetching content" });
  }
}

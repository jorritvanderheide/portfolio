import notion from "@/lib/notion/notion";
import type { NextApiRequest, NextApiResponse } from "next";
import type LearningActivitiesItemProps from "@/types/LearningActivitiesItemProps";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_LEARNING_ACTIVITIES!,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });

  let learningActivitiesItems: LearningActivitiesItemProps[] = [];
  data.results.map((item: any) => {
    learningActivitiesItems.push({
      image: item.cover.external.url,
      isPortrait: item.properties.Portrait.checkbox,
      slug: item.properties.Slug.rich_text[0].plain_text,
      title: item.properties.Name.title[0].plain_text,
    });
  });

  res.json(learningActivitiesItems);
}

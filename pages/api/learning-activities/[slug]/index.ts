import notion from "@/lib/notion/notion";
import { NotionToMarkdown } from "notion-to-md";
import type { NextApiRequest, NextApiResponse } from "next";
import type { MdBlock, MdStringObject } from "notion-to-md/build/types";
import type LearningActivityProps from "@/types/LearningActivityProps";

const n2m = new NotionToMarkdown({ notionClient: notion });

// handles learning activity items requests
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req.query.slug as string;
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
            property: "Slug",
            rich_text: {
              equals: slug,
            },
          },
        ],
      },
    });

    const metadata = data.results[0];

    let isPortrait: boolean = false;
    let hasReport: boolean = false;
    let image: string = "";
    let title: string = "";

    if ("properties" in metadata) {
      if ("Portrait" in metadata.properties) {
        if ("checkbox" in metadata.properties.Portrait)
          isPortrait = metadata.properties.Portrait.checkbox;
      }
      if ("Report" in metadata.properties) {
        if ("checkbox" in metadata.properties.Report)
          hasReport = metadata.properties.Report.checkbox;
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

    const contentBlocks: MdBlock[] = await n2m.pageToMarkdown(metadata.id);
    const contentObject: MdStringObject = n2m.toMarkdownString(contentBlocks);
    const contentString: string = contentObject.parent;

    const learningActivity: LearningActivityProps = {
      hasReport: hasReport,
      image: image,
      isPortrait: isPortrait,
      markdown: contentString,
      title: title,
    };

    res.status(200).json(learningActivity);
  } catch (error) {
    console.error("Error fetching content:", error);
    res.status(500).json({ error: "An error occurred fetching content" });
  }
}

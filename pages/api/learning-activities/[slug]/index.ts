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

    interface areasObject {
      area: string;
      color: string;
      text: string;
    }

    let areas: Array<areasObject> = [];
    let hasReport: boolean = false;
    let image: string = "";
    let isPortrait: boolean = false;
    let logo: string = "";
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
      if ("Logo" in metadata.properties) {
        if ("url" in metadata.properties.Logo) {
          logo = metadata.properties.Logo.url!;
        }
      }
      if ("BE" in metadata.properties) {
        if ("rich_text" in metadata.properties.BE) {
          if (metadata.properties.BE.rich_text[0]) {
            areas.push({
              area: "B&E",
              color: "bg-[#291e39]",
              text: metadata.properties.BE.rich_text[0].plain_text,
            });
          }
        }
      }
      if ("CA" in metadata.properties) {
        if ("rich_text" in metadata.properties.CA) {
          if (metadata.properties.CA.rich_text[0]) {
            areas.push({
              area: "C&A",
              color: "bg-[#17bb54]",
              text: metadata.properties.CA.rich_text[0].plain_text,
            });
          }
        }
      }
      if ("DRP" in metadata.properties) {
        if ("rich_text" in metadata.properties.DRP) {
          if (metadata.properties.DRP.rich_text[0]) {
            areas.push({
              area: "DR&P",
              color: "bg-[#edb5bc]",
              text: metadata.properties.DRP.rich_text[0].plain_text,
            });
          }
        }
      }
      if ("MDC" in metadata.properties) {
        if ("rich_text" in metadata.properties.MDC) {
          if (metadata.properties.MDC.rich_text[0]) {
            areas.push({
              area: "MD&C",
              color: "bg-[#0d496e]",
              text: metadata.properties.MDC.rich_text[0].plain_text,
            });
          }
        }
      }
      if ("TR" in metadata.properties) {
        if ("rich_text" in metadata.properties.TR) {
          if (metadata.properties.TR.rich_text[0]) {
            areas.push({
              area: "T&R",
              color: "bg-[#0fbca8]",
              text: metadata.properties.TR.rich_text[0].plain_text,
            });
          }
        }
      }
      if ("US" in metadata.properties) {
        if ("rich_text" in metadata.properties.US) {
          if (metadata.properties.US.rich_text[0]) {
            areas.push({
              area: "U&S",
              color: "bg-[#f9d172]",
              text: metadata.properties.US.rich_text[0].plain_text,
            });
          }
        }
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
      areas: areas,
      hasReport: hasReport,
      image: image,
      isPortrait: isPortrait,
      logo: logo,
      markdown: contentString,
      title: title,
    };

    res.status(200).json(learningActivity);
  } catch (error) {
    console.error("Error fetching content:", error);
    res.status(500).json({ error: "An error occurred fetching content" });
  }
}

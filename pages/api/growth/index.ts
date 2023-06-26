import notion from "@/lib/notion/notion";
import { NotionToMarkdown } from "notion-to-md";
import type { NextApiRequest, NextApiResponse } from "next";
import type { MdBlock, MdStringObject } from "notion-to-md/build/types";
import type PageContentProps from "@/types/PageContentProps";

const n2m = new NotionToMarkdown({ notionClient: notion });

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await notion.pages.retrieve({
      page_id: process.env.NOTION_PAGE_GROWTH!,
    });

    let description: string = "";
    let image: string = "";
    let portrait: boolean = false;
    let title: string = "";

    if ("properties" in data) {
      if ("Description" in data.properties) {
        if ("rich_text" in data.properties.Description)
          description = data.properties.Description.rich_text[0].plain_text;
      }
      if ("Portrait" in data.properties) {
        if ("checkbox" in data.properties.Portrait) {
          portrait = data.properties.Portrait.checkbox;
        }
      }
      if ("title" in data.properties.Name) {
        title = data.properties.Name.title[0].plain_text;
      }
    }
    if ("cover" in data) {
      if ("external" in data.cover!) {
        image = data.cover.external.url;
      }
    }

    const contentBlocks: MdBlock[] = await n2m.pageToMarkdown(data.id);
    const contentObject: MdStringObject = n2m.toMarkdownString(contentBlocks);
    const contentString: string = contentObject.parent;

    const contentPage: PageContentProps = {
      description: description,
      image: image,
      isPortrait: portrait,
      markdown: contentString,
      title: title,
    };

    res.status(200).json(contentPage);
  } catch (error) {
    console.error("Error fetching content:", error);
    res.status(500).json({ error: "An error occurred fetching content" });
  }
}

import { Client } from "@notionhq/client";

// notion client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export default notion;

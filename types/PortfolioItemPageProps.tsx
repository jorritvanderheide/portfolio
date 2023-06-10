import { MdStringObject } from "notion-to-md/build/types";

export default interface PortfolioItemPageProps {
  description: string;
  hasReport: boolean;
  image: string;
  markdown: MdStringObject;
  title: string;
}

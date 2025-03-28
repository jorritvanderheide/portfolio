// learning activity props
export default interface LearningActivityProps {
  areas: Array<areasObject>;
  hasReport: boolean;
  image: string;
  isPortrait: boolean;
  logo: string;
  markdown: string;
  title: string;
}

export interface areasObject {
  area: string;
  color: string;
  text: string;
}

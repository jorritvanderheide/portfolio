// areas of expertise props
export default interface LearningActivityProps {
  areas: Array<areasObject>;
  className?: string;
}

export interface areasObject {
  area: string;
  color: string;
  text: string;
}

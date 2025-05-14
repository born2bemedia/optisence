export type JobPosition = {
  name: string;
  type: 'full-time' | 'part-time';
  description: {
    text: string[];
    bold?: { text: string; paragraph: number }[];
  };
  requirements: string[];
  responsibilities: string[];
  summary: {
    text: string;
    bold?: string[];
  };
};

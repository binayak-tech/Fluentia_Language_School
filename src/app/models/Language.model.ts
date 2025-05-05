export interface Language {
    id: number;
    slug: string;
    name: string;
    description: string;
    highlights: string[];
    image: string;
    difficulty: string;
    timeToFluency: string;
  }

  export interface LanguageFlags {
    name: string;
    flag: string;
    slug: string;
  }
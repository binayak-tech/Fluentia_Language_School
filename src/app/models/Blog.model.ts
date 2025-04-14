export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    summary: string;
    content: string;
    author: {
      name: string;
      avatar?: string;
    };
    publishDate: string;
    readTime: number;
    imageSrc: string;
    categories: string[];
    tags: string[];
  }
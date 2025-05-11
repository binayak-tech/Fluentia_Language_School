export interface LanguageFlags {
  name: string;
  flag: string;
  slug: string;
}

export interface Language {
  id: number;
  slug: string;
  name: string;
  title: string;
  description: string;
  benefitTitle: string;
  benefits: {
    icon: string;
    title: string;
    description: string;
  }[];
  methodologyTitle: string;
  methodology: string;
  examTitle: string;
  examDescription: string;
  exams: string[];
  testimonials: {
    name: string;
    text: string;
    avatar: string;
  }[];
  ctaTitle: string;
  ctaText: string;
  imageMain: string;
  imageSecondary: string;
  color: string;
}

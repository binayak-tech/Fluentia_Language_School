export interface Course {
  id: number;
  slug: string;
  type: string;
  name: string;
  title: string;
  description: string;
  heroImage: string;
  duration: string;
  level: string;
  groupSize?: number;
  price?: number;
  discount?: number;
  keySkills: Skill[];
  approach: string;
  approachImage: string;
  approachFeatures: ApproachFeature[];
  successStories: SuccessStory[];
  curriculum: CourseModule[];
}

export interface Skill {
  icon: string;
  title: string;
  description?: string;
}

export interface ApproachFeature {
  icon: string;
  title: string;
  description: string;
}

export interface SuccessStory {
  name: string;
  title: string;
  avatar: string;
  quote: string;
  achievement: string;
}

export interface CourseModule {
  title: string;
  illustration: string;
  topics: string[];
}

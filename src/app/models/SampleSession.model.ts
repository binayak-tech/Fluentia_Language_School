export interface LanguageVideo {
    id: number;
    title: string;
    description: string;
    language: string;
    level: string;
    instructor: string;
    thumbnailUrl: string;
    videoUrl: string;
    duration: string;
  }

export type LanguageFilter = 'All' | 'English' | 'French' | 'German' | 'Mandarin' | 'Korean' | 'Japanese';
export type LevelFilter = 'All' | 'Beginner' | 'Intermediate' | 'Advanced';
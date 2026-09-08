export interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  heroImages?: string[];
  modalImages?: string[];
  modalNote?: string;
  liveUrl?: string;
  githubUrl?: string;
  overview?: string;
  details?: string;
  highlights?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface TimelineEntry {
  type: 'experience' | 'education';
  title: string;
  organization: string;
  period: string;
  bullets: string[];
}

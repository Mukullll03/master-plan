export interface Task {
  id: number;
  text: string;
  done: boolean;
}

export interface SubjectSection {
  title: string;
  points: {
    label?: string;
    text: string;
  }[];
}

export interface SubjectLink {
  title: string;
  url: string;
  author: string;
}

export interface Subject {
  id: string;
  title: string;
  target: string;
  iconName: string;
  sections: SubjectSection[];
  links: SubjectLink[];
}

export interface TelegramLink {
  title: string;
  url: string;
  desc: string;
}

export interface QuickPrompt {
  iconName: string;
  iconColor: string;
  label: string;
  template: string;
}

export type TabId = 'dashboard' | 'subjects' | 'ai' | 'schedule' | 'practice';

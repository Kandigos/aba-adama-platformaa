export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  maxParticipants: number;
  currentParticipants: number;
  imageUrl?: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  imageUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  publishDate: string;
  tags: string[];
  imageUrl?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface Newsletter {
  email: string;
  subscriptionDate: string;
  active: boolean;
}
import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'Residential' | 'Commercial' | 'Industrial' | 'Development';
  location: string;
  completionDate: string;
  client: string;
  size: string;
  description: string;
  challenge: string;
  solution: string;
  imageUrl: string;
  gallery: string[];
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  icon: string; // Icon name from lucide
  shortDescription: string;
  fullDescription: string;
  process: string[];
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedin?: string;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
  deadline: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  readTime: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

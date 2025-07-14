export interface Teacher {
  id: string;
  name: string;
  avatar: string;
  subjects: string[];
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  experience: string;
  bio: string;
  languages: string[];
  availability: string[];
  verified: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'student' | 'teacher';
}

export interface Subject {
  id: string;
  name: string;
  category: string;
  icon: string;
}
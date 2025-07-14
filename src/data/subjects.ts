import { Subject } from '../types';

export const subjects: Subject[] = [
  { id: '1', name: 'Matemática', category: 'Exatas', icon: 'Calculator' },
  { id: '2', name: 'Física', category: 'Exatas', icon: 'Atom' },
  { id: '3', name: 'Química', category: 'Exatas', icon: 'TestTube' },
  { id: '4', name: 'Biologia', category: 'Exatas', icon: 'Microscope' },
  { id: '5', name: 'Ciência da Computação', category: 'Exatas', icon: 'Monitor' },
  { id: '6', name: 'Programação', category: 'Exatas', icon: 'Code' },
  { id: '7', name: 'Literatura', category: 'Humanas', icon: 'BookOpen' },
  { id: '8', name: 'Redação', category: 'Humanas', icon: 'PenTool' },
  { id: '9', name: 'História', category: 'Humanas', icon: 'Clock' },
  { id: '10', name: 'Geografia', category: 'Humanas', icon: 'Globe' },
  { id: '11', name: 'Economia', category: 'Negócios', icon: 'TrendingUp' },
  { id: '12', name: 'Administração', category: 'Negócios', icon: 'Briefcase' }
];

export const categories = ['Todas', 'Exatas', 'Humanas', 'Negócios'];
import { Teacher } from '../types';

export const teachers: Teacher[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    subjects: ['Matemática', 'Física'],
    rating: 4.9,
    reviewCount: 127,
    hourlyRate: 45,
    experience: '8 anos',
    bio: 'Professora apaixonada por matemática e física com doutorado em Matemática Aplicada. Especializo-me em tornar conceitos complexos acessíveis e envolventes para estudantes de todos os níveis.',
    languages: ['Português', 'Inglês'],
    availability: ['Segunda', 'Terça', 'Quarta', 'Sexta'],
    verified: true
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    subjects: ['Ciência da Computação', 'Programação'],
    rating: 4.8,
    reviewCount: 89,
    hourlyRate: 55,
    experience: '6 anos',
    bio: 'Engenheiro de software sênior que se tornou educador. Ensino fundamentos de programação, desenvolvimento web e conceitos de ciência da computação com aplicações do mundo real.',
    languages: ['Português', 'Inglês', 'Mandarim'],
    availability: ['Terça', 'Quinta', 'Sábado', 'Domingo'],
    verified: true
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    subjects: ['Literatura', 'Redação'],
    rating: 4.9,
    reviewCount: 156,
    hourlyRate: 40,
    experience: '10 anos',
    bio: 'Ex-professora universitária com expertise em literatura e escrita criativa. Ajudo estudantes a desenvolver pensamento crítico e habilidades de escrita.',
    languages: ['Português', 'Espanhol', 'Francês'],
    availability: ['Segunda', 'Quarta', 'Quinta', 'Sexta'],
    verified: true
  },
  {
    id: '4',
    name: 'David Kim',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
    subjects: ['Química', 'Biologia'],
    rating: 4.7,
    reviewCount: 73,
    hourlyRate: 42,
    experience: '5 anos',
    bio: 'Estudante de medicina com forte formação em química e biologia. Foco em ajudar estudantes a entender conceitos científicos através de exemplos práticos.',
    languages: ['Português', 'Inglês', 'Coreano'],
    availability: ['Segunda', 'Terça', 'Sábado', 'Domingo'],
    verified: true
  },
  {
    id: '5',
    name: 'Anna Petrov',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    subjects: ['História', 'Geografia'],
    rating: 4.8,
    reviewCount: 94,
    hourlyRate: 38,
    experience: '7 anos',
    bio: 'Entusiasta da história com mestrado em História Europeia. Faço eventos históricos ganharem vida através de narrativas e aprendizado interativo.',
    languages: ['Português', 'Inglês', 'Russo', 'Alemão'],
    availability: ['Quarta', 'Quinta', 'Sexta', 'Sábado'],
    verified: true
  },
  {
    id: '6',
    name: 'James Wilson',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    subjects: ['Economia', 'Administração'],
    rating: 4.6,
    reviewCount: 61,
    hourlyRate: 48,
    experience: '9 anos',
    bio: 'Consultor empresarial e professor de economia. Ajudo estudantes a entender princípios econômicos e suas aplicações no mundo real dos negócios.',
    languages: ['Português', 'Inglês'],
    availability: ['Segunda', 'Terça', 'Quinta', 'Sexta'],
    verified: true
  }
];
import React, { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import TeacherCard from '../components/TeacherCard';
import SubjectFilter from '../components/SubjectFilter';
import { teachers } from '../data/teachers';
import { subjects, categories } from '../data/subjects';

export default function TeacherCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('rating');

  const availableSubjects = useMemo(() => {
    if (selectedCategory === 'Todas') {
      return subjects.map(s => s.name);
    }
    return subjects.filter(s => s.category === selectedCategory).map(s => s.name);
  }, [selectedCategory]);

  const filteredTeachers = useMemo(() => {
    let filtered = teachers.filter(teacher => {
      const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          teacher.subjects.some(subject => 
                            subject.toLowerCase().includes(searchTerm.toLowerCase())
                          );
      
      const matchesSubjects = selectedSubjects.length === 0 ||
                            selectedSubjects.some(subject => 
                              teacher.subjects.includes(subject)
                            );
      
      return matchesSearch && matchesSubjects;
    });

    // Sort teachers
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price-low':
          return a.hourlyRate - b.hourlyRate;
        case 'price-high':
          return b.hourlyRate - a.hourlyRate;
        case 'reviews':
          return b.reviewCount - a.reviewCount;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedSubjects, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Encontre o Professor Perfeito</h1>
          <p className="text-gray-600">
            Navegue pelo nosso catálogo de professores especialistas e encontre a combinação perfeita para suas necessidades de aprendizado.
          </p>
        </div>

        {/* buscador e filtros */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por nome ou matéria..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <SlidersHorizontal className="w-5 h-5" />
                <span>Filtros</span>
              </button>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="rating">Melhor Avaliados</option>
                <option value="price-low">Preço: Menor para Maior</option>
                <option value="price-high">Preço: Maior para Menor</option>
                <option value="reviews">Mais Avaliações</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="lg:w-80">
              <SubjectFilter
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                selectedSubjects={selectedSubjects}
                onSubjectChange={setSelectedSubjects}
                availableSubjects={availableSubjects}
              />
            </div>
          )}

          {/* professores  */}
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-600">
                {filteredTeachers.length} professor{filteredTeachers.length !== 1 ? 'es' : ''} encontrado{filteredTeachers.length !== 1 ? 's' : ''}
              </p>
            </div>

            {filteredTeachers.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum professor encontrado</h3>
                <p className="text-gray-600">
                  Tente ajustar seus critérios de busca ou filtros para encontrar mais professores.
                </p>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {filteredTeachers.map((teacher) => (
                  <TeacherCard key={teacher.id} teacher={teacher} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
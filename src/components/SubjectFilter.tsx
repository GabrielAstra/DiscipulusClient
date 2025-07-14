import React from 'react';
import { categories } from '../data/subjects';

interface SubjectFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedSubjects: string[];
  onSubjectChange: (subjects: string[]) => void;
  availableSubjects: string[];
}

export default function SubjectFilter({
  selectedCategory,
  onCategoryChange,
  selectedSubjects,
  onSubjectChange,
  availableSubjects
}: SubjectFilterProps) {
  const handleSubjectToggle = (subject: string) => {
    if (selectedSubjects.includes(subject)) {
      onSubjectChange(selectedSubjects.filter(s => s !== subject));
    } else {
      onSubjectChange([...selectedSubjects, subject]);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Filtrar por Matéria</h3>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Categoria
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Matérias
          </label>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {availableSubjects.map((subject) => (
              <label key={subject} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedSubjects.includes(subject)}
                  onChange={() => handleSubjectToggle(subject)}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-sm text-gray-700">{subject}</span>
              </label>
            ))}
          </div>
        </div>
        
        {selectedSubjects.length > 0 && (
          <button
            onClick={() => onSubjectChange([])}
            className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Limpar filtros
          </button>
        )}
      </div>
    </div>
  );
}
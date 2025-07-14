import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, CheckCircle, Globe, MapPin, Award, Users } from 'lucide-react';
import { Teacher } from '../types';

interface TeacherCardProps {
  teacher: Teacher;
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-indigo-100 transition-all duration-300 transform hover:-translate-y-1">
      {/* Header com Avatar e Status */}
      <div className="relative p-6 pb-4">
        <div className="flex items-start justify-between">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-white shadow-lg">
              <img
                src={teacher.avatar}
                alt={teacher.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {teacher.verified && (
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-1.5 shadow-lg">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
          
          <div className="text-right">
            <div className="flex items-center justify-end space-x-1 mb-1">
              <Star className="w-4 h-4 text-amber-400 fill-current" />
              <span className="text-lg font-bold text-gray-900">{teacher.rating}</span>
            </div>
            <div className="text-sm text-gray-500">
              {teacher.reviewCount} avaliações
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
            {teacher.name}
          </h3>
          <div className="flex items-center text-gray-600 text-sm">
            <Award className="w-4 h-4 mr-1" />
            <span>{teacher.experience} de experiência</span>
          </div>
        </div>
      </div>

      {/* Matérias */}
      <div className="px-6 pb-4">
        <div className="flex flex-wrap gap-2">
          {teacher.subjects.slice(0, 3).map((subject, index) => (
            <span
              key={subject}
              className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                index === 0 
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white' 
                  : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
              }`}
            >
              {subject}
            </span>
          ))}
          {teacher.subjects.length > 3 && (
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
              +{teacher.subjects.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Informações Adicionais */}
      <div className="px-6 pb-4 space-y-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-gray-600">
            <Globe className="w-4 h-4 mr-2" />
            <span>{teacher.languages.slice(0, 2).join(', ')}</span>
            {teacher.languages.length > 2 && (
              <span className="ml-1 text-gray-400">+{teacher.languages.length - 2}</span>
            )}
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-1" />
            <span>{teacher.reviewCount}</span>
          </div>
        </div>

        {/* Bio Preview */}
        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
          {teacher.bio.length > 100 ? `${teacher.bio.substring(0, 100)}...` : teacher.bio}
        </p>
      </div>

      {/* Footer com Preço e Ação */}
      <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-indigo-50 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-baseline space-x-1">
              <span className="text-2xl font-bold text-gray-900">R${teacher.hourlyRate}</span>
              <span className="text-sm text-gray-500">/hora</span>
            </div>
            <div className="text-xs text-gray-500 mt-0.5">
              A partir de
            </div>
          </div>
          
          <Link
            to={`/teacher/${teacher.id}`}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Ver Perfil
          </Link>
        </div>
      </div>

      {/* Indicador de Disponibilidade */}
      <div className="absolute top-4 left-4">
        <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 shadow-sm">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs font-medium text-gray-700">Online</span>
        </div>
      </div>
    </div>
  );
}
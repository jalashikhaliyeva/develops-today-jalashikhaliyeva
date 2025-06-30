'use client';

import { Menu, Github } from 'lucide-react';
import { HeaderProps } from '@/types';

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg"></div>
            <h1 className="text-xl font-bold text-gray-900">Component Library</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuClick}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
            >
              <Menu size={20} />
              <span className="hidden sm:block">Menu</span>
            </button>
            
            <a
              href="https://github.com/jalashikhaliyeva"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
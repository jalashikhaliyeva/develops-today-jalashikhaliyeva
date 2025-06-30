import { Github, ExternalLink, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg"></div>
              <h3 className="text-xl font-bold">Component Library</h3>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              A modern React component library built with Next.js 14, TypeScript, 
              Tailwind CSS, and Storybook for creating beautiful user interfaces.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/jalashikhaliyeva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://jala-shikhaliyeva-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Components</h4>
            <ul className="space-y-2">
              <li>
                <a href="#input" className="text-gray-400 hover:text-white transition-colors">
                  Input Component
                </a>
              </li>
              <li>
                <a href="#toast" className="text-gray-400 hover:text-white transition-colors">
                  Toast Notifications
                </a>
              </li>
              <li>
                <a href="#sidebar" className="text-gray-400 hover:text-white transition-colors">
                  Sidebar Menu
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://jala-shikhaliyeva-portfolio.vercel.app/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Storybook Docs
                </a>
              </li>
              <li>
                <a 
                  href="https://nextjs.org/docs" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Next.js Docs
                </a>
              </li>
              <li>
                <a 
                  href="https://tailwindcss.com/docs" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tailwind CSS
                </a>
              </li>
              <li>
                <a 
                  href="https://www.typescriptlang.org/docs" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  TypeScript
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Built with</span>
            <Heart size={16} className="text-red-500" />
            <span>for the DevelopsToday</span>
          </div>
          <div className="text-gray-400 mt-4 md:mt-0">
            © 2025 Component Library. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
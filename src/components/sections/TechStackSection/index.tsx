// src/components/sections/TechStackSection.tsx
export const TechStackSection: React.FC = () => {
    const techStack = [
      {
        emoji: '⚛️',
        name: 'React 18',
        description: 'Latest features'
      },
      {
        emoji: '📘',
        name: 'TypeScript',
        description: 'Type safety'
      },
      {
        emoji: '🎨',
        name: 'Tailwind CSS',
        description: 'Utility-first'
      },
      {
        emoji: '📚',
        name: 'Storybook',
        description: 'Component docs'
      }
    ];
  
    return (
      <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technical Stack</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl mb-2">{tech.emoji}</div>
              <div className="font-medium text-gray-900">{tech.name}</div>
              <div className="text-sm text-gray-600">{tech.description}</div>
            </div>
          ))}
        </div>
      </section>
    );
  };
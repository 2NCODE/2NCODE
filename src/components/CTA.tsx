import { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'An advanced dashboard for restaurants to manage orders, track revenue, and streamline operations',
    imageUrl: '/assets/Photo1.png',
  },
  {
    title: 'Project 2',
    description: 'A user-friendly mobile app for discovering local dishes, placing orders, and tracking deliveries in real time.',
    imageUrl: '/assets/photo2.png',
  },
  {
    title: 'Project 3',
    description: 'A web platform for doctors to schedule, manage, and track patient appointments efficiently.',
    imageUrl: '/assets/photo3.png',
  },
];

const CTA = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const interval = setInterval(nextProject, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="relative py-8 bg-gray-900">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[rgb(30,27,75,0.7)] absolute"></div>
        <img
          src="https://png.pngtree.com/background/20230617/original/pngtree-abstract-technology-and-communication-background-a-3d-rendering-of-interconnected-lines-picture-image_3703982.jpg"
          alt="Background"
          className="w-full h-full object-cover blur-sm brightness-75"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">
        <img
          src={projects[currentProject].imageUrl}
          alt={projects[currentProject].title}
          className="mx-auto mb-4 w-56 h-40 object-cover shadow-2xl transition-transform duration-300 hover:scale-105"
        />
        <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed font-semibold">
          {projects[currentProject].description}
        </p>
        <div className="flex justify-center space-x-2 mb-6">
          {projects.map((_, index) => (
        <span
          key={index}
          className={`h-2 w-2 rounded-full ${index === currentProject ? 'bg-white' : 'bg-gray-500'}`}
        ></span>
          ))}
        </div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <button onClick={prevProject} className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-200 transition-colors">
        <ArrowLeft className="h-4 w-4 text-indigo-700" />
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <button onClick={nextProject} className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-200 transition-colors">
        <ArrowRight className="h-4 w-4 text-indigo-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
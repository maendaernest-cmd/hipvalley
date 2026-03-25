import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '@/src/constants';
import { Link } from 'react-router-dom';
import { Search, Filter, MapPin } from 'lucide-react';

export const ProjectsPage = () => {
  const [filter, setFilter] = React.useState('All');
  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Development'];

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <main className="pt-20">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-600">
              Explore our diverse range of completed projects across Harare and Zimbabwe. Each project represents our commitment to quality and architectural excellence.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                  filter === cat
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/20'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                key={project.id}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <Link to={`/projects/${project.slug}`}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-3">
                      <span>{project.category}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      <span className="flex items-center gap-1">
                        <MapPin size={12} /> {project.location}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-6">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center pt-6 border-t border-gray-50">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Completed {project.completionDate.split('-')[0]}</span>
                      <span className="text-orange-600 font-bold text-sm">View Case Study →</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

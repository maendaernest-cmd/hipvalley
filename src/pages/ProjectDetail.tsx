import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS } from '@/src/constants';
import { ArrowLeft, MapPin, Calendar, User, Maximize2, CheckCircle2 } from 'lucide-react';

export const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = PROJECTS.find(p => p.slug === slug);

  if (!project) return <Navigate to="/projects" />;

  return (
    <main className="pt-20">
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
            <Link to="/projects" className="inline-flex items-center text-sm font-bold uppercase tracking-widest mb-8 hover:text-orange-500 transition-colors">
              <ArrowLeft size={16} className="mr-2" /> Back to Projects
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">{project.title}</h1>
            <div className="flex flex-wrap gap-8 text-sm font-bold uppercase tracking-widest text-orange-500">
              <span className="flex items-center gap-2"><MapPin size={18} /> {project.location}</span>
              <span className="flex items-center gap-2"><Calendar size={18} /> Completed {project.completionDate}</span>
              <span className="flex items-center gap-2"><Maximize2 size={18} /> {project.size}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The Challenge</h3>
                  <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
                </div>
                <div className="bg-orange-50 p-10 rounded-3xl border border-orange-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The Solution</h3>
                  <p className="text-gray-600 leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {project.gallery.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.gallery.map((img, i) => (
                      <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden">
                        <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-gray-900 p-10 rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-8">Project Details</h3>
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Client</span>
                    <span className="text-lg font-medium">{project.client}</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Category</span>
                    <span className="text-lg font-medium">{project.category}</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Location</span>
                    <span className="text-lg font-medium">{project.location}</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-600 p-10 rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-6">Interested?</h3>
                <p className="text-orange-100 mb-8">Let's discuss how we can bring similar excellence to your project.</p>
                <Link to="/contact" className="block w-full bg-white text-orange-600 py-4 rounded-full font-bold text-center hover:bg-gray-100 transition-all">
                  Start a Conversation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

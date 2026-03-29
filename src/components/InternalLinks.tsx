import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 py-4">
      <Link to="/" className="hover:text-orange-600 transition-colors">
        Home
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span className="text-gray-400">/</span>
          {item.url ? (
            <Link to={item.url} className="hover:text-orange-600 transition-colors">
              {item.name}
            </Link>
          ) : (
            <span className="text-gray-900 font-medium">{item.name}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export const InternalLinks: React.FC = () => {
  const relatedServices = [
    { title: 'Custom Home Building', url: '/services/custom-home-building', desc: 'Build your dream home from scratch' },
    { title: 'Home Renovations', url: '/services/home-renovations', desc: 'Transform your existing space' },
    { title: 'Home Extensions', url: '/services/home-extensions', desc: 'Expand your living area' }
  ];

  const recentProjects = [
    { title: 'Borrowdale Luxury Residence', url: '/projects/borrowdale-luxury-residence', desc: '620 sqm luxury family home' },
    { title: 'Kuwadzana Extension', url: '/projects/kuwadzana-extension', desc: '450 sqm home extension' }
  ];

  return (
    <div className="space-y-8">
      {/* Related Services */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {relatedServices.map((service, index) => (
            <Link
              key={index}
              to={service.url}
              className="block p-4 bg-white rounded-xl border border-gray-100 hover:border-orange-300 hover:shadow-md transition-all"
            >
              <h4 className="font-bold text-gray-900 mb-2">{service.title}</h4>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Projects */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recentProjects.map((project, index) => (
            <Link
              key={index}
              to={project.url}
              className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-orange-300 hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-orange-600 font-bold text-xl">🏠</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">{project.title}</h4>
                <p className="text-sm text-gray-600">{project.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

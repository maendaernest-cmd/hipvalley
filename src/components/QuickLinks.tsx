import React from 'react';
import { Link } from 'react-router-dom';

interface QuickLinksProps {
  title: string;
  links: { text: string; url: string }[];
}

const QuickLinks: React.FC<QuickLinksProps> = ({ title, links }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100">
      <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link 
              to={link.url}
              className="text-gray-600 hover:text-orange-600 transition-colors text-sm"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const QuickLinksSection: React.FC = () => {
  const services = [
    { text: 'Custom Home Building', url: '/services/custom-home-building' },
    { text: 'Home Renovations', url: '/services/home-renovations' },
    { text: 'Home Extensions', url: '/services/home-extensions' },
    { text: 'Project Gallery', url: '/projects' }
  ];

  const company = [
    { text: 'About Hipavalley', url: '/about' },
    { text: 'Our Team', url: '/about#team' },
    { text: 'Contact Us', url: '/contact' },
    { text: 'Get a Quote', url: '/contact' }
  ];

  const resources = [
    { text: 'Harare Building Guide', url: '/blog/harare-building-guide' },
    { text: 'Construction Process', url: '/blog/construction-process' },
    { text: 'Sustainable Building', url: '/blog/sustainable-building' },
    { text: 'Cost Calculator', url: '/cost-calculator' }
  ];

  const locations = [
    { text: 'Borrowdale Homes', url: '/projects/borrowdale-luxury-residence' },
    { text: 'Kuwadzana Extensions', url: '/projects/kuwadzana-extension' },
    { text: 'Highlands Properties', url: '/projects/highlands' },
    { text: 'All Harare Areas', url: '/projects' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Links</h2>
          <p className="text-gray-600">Find what you're looking for quickly</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <QuickLinks title="Services" links={services} />
          <QuickLinks title="Company" links={company} />
          <QuickLinks title="Resources" links={resources} />
          <QuickLinks title="Locations" links={locations} />
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/images/a-modern-minimalist-logo-design-for-hipv_y5QjWxjWRGSCYc0SRvroSQ_a006HBgiQoq5ZP1vet8X1w_sd.jpeg" 
              alt="Hipvalley Logo" 
              className="h-16 w-16 rounded-lg object-cover"
            />
          </Link>

          {/* Desktop Nav - Centered */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-orange-600",
                  location.pathname === link.path ? "text-orange-600" : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Get a Quote Button - Right Side */}
          <Link
            to="/contact"
            className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all hidden md:block"
          >
            Get a Quote
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-4 text-base font-medium rounded-md",
                    location.pathname === link.path ? "bg-orange-50 text-orange-600" : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img 
                src="/images/a-modern-minimalist-logo-design-for-hipv_y5QjWxjWRGSCYc0SRvroSQ_a006HBgiQoq5ZP1vet8X1w_sd.jpeg" 
                alt="Hipvalley Logo" 
                className="h-16 w-16 rounded-lg object-cover"
              />
              <span className="text-2xl font-bold tracking-tighter text-white">
                HIP<span className="text-orange-500">VALLEY</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Building beautiful family homes across Harare with care, quality craftsmanship, and personal attention to every detail.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-orange-500 transition-colors">Our Services</Link></li>
              <li><Link to="/projects" className="hover:text-orange-500 transition-colors">Portfolio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services/custom-home-building" className="hover:text-orange-500 transition-colors">Custom Home Building</Link></li>
              <li><Link to="/services/home-renovations" className="hover:text-orange-500 transition-colors">Home Renovations</Link></li>
              <li><Link to="/services/home-extensions" className="hover:text-orange-500 transition-colors">Home Extensions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-orange-500 shrink-0" />
                <span>Kuwadzana Extension, Harare, Zimbabwe</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-orange-500 shrink-0" />
                <span>+263 7730631303</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-orange-500 shrink-0" />
                <span>hipvalley@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-gray-500">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p>© 2026 Hipvalley Construction. All rights reserved.</p>
            <p>Powered by Ernest T Maenda</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

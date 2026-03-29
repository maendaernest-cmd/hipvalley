import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import { SEO } from './components/SEO';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { ServicesPage } from './pages/Services';
import { ProjectsPage } from './pages/Projects';
import { ProjectDetailPage } from './pages/ProjectDetail';
import { ContactPage } from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans selection:bg-orange-100 selection:text-orange-900">
        <SEO />
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/custom-home-building" element={<ServicesPage />} />
            <Route path="/services/home-renovations" element={<ServicesPage />} />
            <Route path="/services/home-extensions" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

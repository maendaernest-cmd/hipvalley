import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Users, Briefcase, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS, SERVICES } from '@/src/constants';
import * as Icons from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-services.jpg"
          alt="Construction site"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Your Dream Home, <br />
            <span className="text-orange-500 italic font-serif">Beautifully Built.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
            Dedicated to crafting beautiful, quality homes for families across Harare. We bring your residential vision to life with care and attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/projects"
              className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition-all flex items-center justify-center group"
            >
              View Our Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all flex items-center justify-center"
            >
              Request a Quote
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-12 text-white/60 text-sm font-medium uppercase tracking-widest hidden lg:flex">
        <div className="flex items-center space-x-2">
          <span className="text-orange-500 font-bold text-lg">5+</span>
          <span>Years Building Homes</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-orange-500 font-bold text-lg">25+</span>
          <span>Homes Completed</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-orange-500 font-bold text-lg">8+</span>
          <span>Dedicated Team</span>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-orange-600 uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">Quality Home Construction Services</h3>
          <p className="text-gray-600">From custom family homes to thoughtful renovations, we provide personalized construction services tailored to Harare families.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = (Icons as any)[service.icon];
            return (
              <motion.div
                key={service.id}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 group"
              >
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-8 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <IconComponent size={28} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-8 leading-relaxed">{service.shortDescription}</p>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors"
                >
                  Learn More <ArrowRight className="ml-2" size={16} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const FeaturedProjects = () => {
  const featured = PROJECTS.filter(p => p.featured);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-[0.2em] mb-4">Portfolio</h2>
            <h3 className="text-4xl font-bold text-gray-900">Featured Projects</h3>
          </div>
          <Link
            to="/projects"
            className="text-sm font-bold text-gray-900 border-b-2 border-orange-600 pb-1 hover:text-orange-600 transition-colors"
          >
            View All Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featured.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="group relative overflow-hidden rounded-3xl aspect-[16/10]"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2 block">
                  {project.category} • {project.location}
                </span>
                <h4 className="text-2xl font-bold group-hover:translate-x-2 transition-transform">{project.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    { icon: Trophy, title: 'Quality Excellence', desc: 'Uncompromising standards in every brick and beam.' },
    { icon: Users, title: 'Expert Team', desc: 'Harare\'s finest engineers and craftsmen.' },
    { icon: Briefcase, title: 'Reliable Delivery', desc: 'On-time, on-budget, every single time.' },
    { icon: Star, title: 'Client Focused', desc: 'Your vision is our primary blueprint.' },
  ];

  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/10 blur-[120px] -translate-y-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-[0.2em] mb-4">Why Hipavalley</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Building Beautiful Homes for Harare Families</h3>
            <p className="text-gray-400 mb-12 text-lg leading-relaxed">
              We believe every family deserves a beautiful, functional home. Our small, dedicated team focuses on quality craftsmanship and personal service to bring your residential dreams to life.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-orange-500">
                    <f.icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold">{f.title}</h4>
                  <p className="text-gray-500 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="/images/extension-service.jpg"
                alt="Construction detail"
                className="w-full h-full object-cover"
                style={{ clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 25% 100%, 0 85%)' }}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-orange-600 p-10 rounded-3xl">
              <div className="text-5xl font-bold mb-2">5+</div>
              <div className="text-sm font-medium uppercase tracking-widest">Years Building Homes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-orange-600 uppercase tracking-[0.2em] mb-4">Testimonials</h2>
          <h3 className="text-4xl font-bold text-gray-900">What Our Clients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100">
              <div className="flex text-orange-500 mb-6">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 italic mb-8 leading-relaxed">
                "Hipavalley built our family home exactly as we dreamed it. Their attention to detail and personal approach made the entire process stress-free. We love our new home!"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full" />
                <div>
                  <h5 className="font-bold text-gray-900">John Doe</h5>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Homeowner, Borrowdale</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-orange-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Ready to Build Your Family Home?</h3>
            <p className="text-orange-100 text-lg mb-10">
              Whether it's a new custom home or a renovation project, our dedicated team is ready to bring your family's vision to life with care and craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all"
              >
                Get a Free Consultation
              </Link>
              <Link
                to="/services"
                className="bg-orange-700 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-800 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <FeaturedProjects />
      <Testimonials />
      <CTA />
    </main>
  );
};

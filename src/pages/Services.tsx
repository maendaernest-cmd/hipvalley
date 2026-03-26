import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '@/src/constants';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const ServicesPage = () => {
  return (
    <main className="pt-20">
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative mb-12">
            <img
              src="/images/hero-services.jpg"
              alt="Construction services"
              className="w-full h-64 object-cover rounded-3xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/50 rounded-3xl flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white">Our Services</h1>
            </div>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From groundbreaking to final finishing touches, Hipavalley provides comprehensive construction solutions for Harare families.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {SERVICES.map((service, index) => {
              const IconComponent = (Icons as any)[service.icon];
              return (
                <div key={service.id} className={`flex flex-col lg:flex-row items-center gap-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex-1 space-y-8">
                    <div className="w-20 h-20 bg-orange-50 rounded-3xl flex items-center justify-center text-orange-600">
                      <IconComponent size={40} />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900">{service.title}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {service.fullDescription}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-3 text-gray-700 font-medium">
                          <CheckCircle2 size={20} className="text-orange-600" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-6">
                      <Link
                        to="/contact"
                        className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all inline-flex items-center"
                      >
                        Request Consultation <ArrowRight className="ml-2" size={20} />
                      </Link>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                      <img
                        src={
                          service.slug === 'home-renovations' 
                            ? '/images/WhatsApp Image 2026-03-25 at 20.27.20.jpeg'
                            : service.slug === 'home-extensions'
                            ? '/images/download (1).jfif'
                            : '/images/WhatsApp Image 2026-03-25 at 20.27.30.jpeg'
                        }
                        alt={service.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-[0.2em] mb-4">Our Process</h2>
            <h3 className="text-4xl font-bold text-gray-900">How We Deliver Excellence</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {['Consultation', 'Planning', 'Design', 'Construction', 'Handover'].map((step, i) => (
              <div key={i} className="relative text-center group">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-2xl font-black text-orange-600 mx-auto mb-6 shadow-sm border border-gray-100 group-hover:bg-orange-600 group-hover:text-white transition-all">
                  0{i + 1}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{step}</h4>
                <p className="text-gray-500 text-sm">Expert guidance and execution at every stage.</p>
                {i < 4 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[2px] bg-gray-200 -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { TEAM } from '@/src/constants';
import { CheckCircle2, Award, ShieldCheck, Zap } from 'lucide-react';

export const AboutPage = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-32 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/about-hero.jpg"
            alt="Architecture"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Built on Harare Ground</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A decade of excellence in transforming the Zimbabwean landscape through visionary construction and unwavering integrity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-sm font-bold text-orange-600 uppercase tracking-[0.2em]">Our Story</h2>
              <h3 className="text-4xl font-bold text-gray-900 leading-tight">From a Vision to Market Leadership</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Founded in 2010, Hipvalley began with a simple mission: to provide high-quality construction services that Zimbabweans can trust. What started as a small team of dedicated craftsmen has grown into one of Harare's premier construction firms.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our journey has been defined by our commitment to local expertise, sustainable practices, and the belief that every structure we build contributes to the future of our nation.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest">Years in Business</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">200+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1541976590-71394168159b?auto=format&fit=crop&q=80&w=1000"
                alt="Team working"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block max-w-xs">
                <p className="text-gray-900 font-bold italic">"We don't just build walls; we build dreams and lasting legacies for our community."</p>
                <p className="text-orange-600 text-sm font-bold mt-4">— Joseph Chamakandiona</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-[0.2em] mb-4">Our Values</h2>
            <h3 className="text-4xl font-bold text-gray-900">The Pillars of Hipvalley</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: 'Integrity', desc: 'Honesty and transparency in every contract and interaction.' },
              { icon: Award, title: 'Quality', desc: 'Uncompromising standards in materials and craftsmanship.' },
              { icon: Zap, title: 'Innovation', desc: 'Embracing modern technology for better building solutions.' },
              { icon: CheckCircle2, title: 'Reliability', desc: 'Delivering on our promises, on time and within budget.' },
            ].map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl text-center space-y-4 border border-gray-100">
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mx-auto">
                  <v.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-[0.2em] mb-4">Our Team</h2>
            <h3 className="text-4xl font-bold text-gray-900">The Minds Behind the Excellence</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {TEAM.map((member) => (
              <div key={member.id} className="group">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">{member.name}</h4>
                <p className="text-orange-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

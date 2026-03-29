import React from 'react';
import { motion } from 'motion/react';
import { JOBS } from '@/src/constants';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

export const CareersPage = () => {
  return (
    <main className="pt-20">
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Join the Team</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Build your career with Harare's premier construction firm. We're looking for visionary engineers, craftsmen, and leaders.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Open Positions</h2>
              <div className="space-y-6">
                {JOBS.map((job) => (
                  <div key={job.id} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1"><Briefcase size={16} /> {job.department}</span>
                          <span className="flex items-center gap-1"><MapPin size={16} /> {job.location}</span>
                          <span className="flex items-center gap-1"><Clock size={16} /> {job.type}</span>
                        </div>
                      </div>
                      <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-all">
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-orange-600 p-10 rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-6">Why Hipvalley?</h3>
                <ul className="space-y-4">
                  {[
                    'Competitive Salaries',
                    'Health & Safety First',
                    'Career Growth Paths',
                    'Modern Equipment',
                    'Dynamic Projects'
                  ].map((b, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle2 size={20} className="text-orange-200" />
                      <span className="font-medium">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Internship Program</h3>
                <p className="text-gray-600 mb-6">Are you a recent graduate? Join our graduate trainee program and learn from the best in the industry.</p>
                <button className="text-orange-600 font-bold flex items-center group">
                  Learn More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

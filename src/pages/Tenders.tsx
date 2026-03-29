import React from 'react';
import { motion } from 'motion/react';
import { FileText, ClipboardCheck, Users, ArrowRight } from 'lucide-react';

export const TendersPage = () => {
  return (
    <main className="pt-20">
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Tenders & Procurement</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Partner with Hipvalley. We are committed to building a robust and ethical supply chain with local partners.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Open Tenders</h2>
                <div className="bg-gray-50 p-8 rounded-3xl border border-dashed border-gray-300 text-center">
                  <FileText className="mx-auto text-gray-400 mb-4" size={48} />
                  <p className="text-gray-500 font-medium">There are currently no open tenders. Please check back later or register as a vendor.</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Procurement Policy</h2>
                <div className="space-y-6">
                  {[
                    { title: 'Ethical Sourcing', desc: 'We prioritize suppliers who adhere to fair labor practices and environmental standards.' },
                    { title: 'Local Commitment', desc: 'Hipvalley is dedicated to supporting Zimbabwean businesses and local manufacturing.' },
                    { title: 'Quality First', desc: 'All materials must meet or exceed national and international building standards.' }
                  ].map((p, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 shrink-0">
                        <ClipboardCheck size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{p.title}</h4>
                        <p className="text-gray-600">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Vendor Registration</h2>
              <p className="text-gray-600 mb-10">Register your company in our database to be notified of future tender opportunities.</p>
              
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">Company Name</label>
                  <input className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-orange-600" placeholder="Acme Construction Ltd" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">Service/Product Category</label>
                  <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-orange-600">
                    <option>Electrical Subcontractor</option>
                    <option>Plumbing Subcontractor</option>
                    <option>Material Supplier</option>
                    <option>Plant Hire</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">Contact Person</label>
                  <input className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-orange-600" placeholder="Jane Smith" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">Email Address</label>
                  <input className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-orange-600" placeholder="jane@acme.com" />
                </div>
                <button className="w-full bg-orange-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-orange-700 transition-all">
                  Register as Vendor
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

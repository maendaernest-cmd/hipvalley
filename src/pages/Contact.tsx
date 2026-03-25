import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

export const ContactPage = () => {
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <main className="pt-20">
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info */}
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-8">Let's Build Something Great Together</h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Have a project in mind? Our team of experts is ready to help you navigate the construction process from start to finish.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Our Office</h4>
                    <p className="text-gray-600">123 Enterprise Rd, Highlands, Harare, Zimbabwe</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-600">+263 242 123 456</p>
                    <p className="text-gray-600">+263 772 000 000 (WhatsApp)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Email Us</h4>
                    <p className="text-gray-600">info@hipavalley.co.zw</p>
                    <p className="text-gray-600">projects@hipavalley.co.zw</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-600">Mon - Fri: 7:30 AM - 5:00 PM</p>
                    <p className="text-gray-600">Sat: 8:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-gray-900 rounded-3xl text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <MessageSquare className="text-orange-500" />
                  <h4 className="text-xl font-bold">WhatsApp Support</h4>
                </div>
                <p className="text-gray-400 mb-6">Need a quick answer? Chat with our sales team directly on WhatsApp.</p>
                <a
                  href="https://wa.me/263772000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition-all"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-gray-100">
              {status === 'success' ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Send size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                  <p className="text-gray-600 mb-8">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-orange-600 font-bold border-b-2 border-orange-600 pb-1"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">Full Name</label>
                      <input
                        required
                        type="text"
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">Email Address</label>
                      <input
                        required
                        type="email"
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">Phone Number</label>
                      <input
                        required
                        type="tel"
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all"
                        placeholder="+263 772 000 000"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">Project Type</label>
                      <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all">
                        <option>Residential Build</option>
                        <option>Commercial Project</option>
                        <option>Renovation</option>
                        <option>Property Development</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">Message</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    disabled={status === 'sending'}
                    type="submit"
                    className="w-full bg-orange-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-orange-700 transition-all flex items-center justify-center disabled:opacity-50"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2" size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest">
          Interactive Google Map Integration
        </div>
      </section>
    </main>
  );
};

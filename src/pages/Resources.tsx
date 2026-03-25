import React from 'react';
import { motion } from 'motion/react';
import { BLOG_POSTS, FAQS } from '@/src/constants';
import { Link } from 'react-router-dom';
import { Search, BookOpen, HelpCircle, ArrowRight } from 'lucide-react';

export const ResourcesPage = () => {
  return (
    <main className="pt-20">
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Resources & Insights</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest construction trends, industry news, and expert guides from the Hipavalley team.
            </p>
          </div>

          {/* Blog */}
          <div className="mb-24">
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <BookOpen className="text-orange-600" /> Latest Insights
              </h2>
              <Link to="/blog" className="text-orange-600 font-bold">View All Posts →</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {BLOG_POSTS.map((post) => (
                <article key={post.id} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-xs font-bold text-orange-600 uppercase tracking-widest mb-4">
                      <span>{post.category}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">{post.title}</h3>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-2">{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`} className="text-gray-900 font-bold flex items-center group">
                      Read More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-3">
                <HelpCircle className="text-orange-600" /> Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <details key={i} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-gray-900">
                    {faq.question}
                    <span className="transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

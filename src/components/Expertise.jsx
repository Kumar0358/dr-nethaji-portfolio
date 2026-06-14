'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/utils/animations';
import { SURGICAL_SPECIALTIES } from '@/utils/constants';

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-display-md md:text-display-lg font-display font-bold text-navy-900 dark:text-white mb-4">
            Surgical Specialties
          </h2>
          <p className="text-lg text-navy-600 dark:text-gray-400 max-w-2xl mx-auto">
            Advanced laparoscopic and general surgical procedures with minimal invasiveness and optimal recovery
          </p>
        </motion.div>

        {/* Specialties Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {SURGICAL_SPECIALTIES.map((specialty) => (
            <motion.div
              key={specialty.id}
              variants={staggerItem}
              className="card p-6 group hover:shadow-elevation-4 h-full flex flex-col"
              whileHover={{ y: -8 }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {specialty.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {specialty.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-navy-600 dark:text-gray-400 mb-4 flex-grow">
                {specialty.description}
              </p>

              {/* Benefits */}
              <div className="space-y-2 mb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                <p className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wide">
                  Key Benefits
                </p>
                <ul className="space-y-1">
                  {specialty.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-navy-600 dark:text-gray-400">
                      <span className="text-teal-600 dark:text-teal-400 mt-0.5">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recovery */}
              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-3 border border-teal-200 dark:border-teal-800/50">
                <p className="text-xs font-semibold text-teal-700 dark:text-teal-300">
                  Recovery Time
                </p>
                <p className="text-sm font-bold text-teal-600 dark:text-teal-400 mt-1">
                  {specialty.recovery}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-teal-50 to-navy-50 dark:from-teal-900/20 dark:to-navy-900/20 rounded-2xl p-8 md:p-12 border border-teal-200 dark:border-teal-800/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-4">
                Why Laparoscopic Surgery?
              </h3>
              <ul className="space-y-3">
                {[
                  'Smaller incisions = less trauma',
                  'Faster recovery time',
                  'Reduced post-operative pain',
                  'Lower infection risk',
                  'Better cosmetic outcomes'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-navy-700 dark:text-gray-300">
                    <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-4">
                Advanced Equipment & Techniques
              </h3>
              <ul className="space-y-3">
                {[
                  'State-of-the-art laparoscopic equipment',
                  'Latest surgical technology',
                  'Evidence-based procedures',
                  'Minimally invasive approach',
                  '24/7 emergency availability'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-navy-700 dark:text-gray-300">
                    <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

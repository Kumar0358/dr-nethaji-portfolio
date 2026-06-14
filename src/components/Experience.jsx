'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/utils/animations';
import { EXPERIENCE } from '@/utils/constants';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Professional Experience
          </h2>
          <p className="text-lg text-navy-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive timeline of surgical excellence and clinical progression
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="relative mb-8 last:mb-0"
            >
              {/* Timeline Line */}
              {idx < EXPERIENCE.length - 1 && (
                <div className="absolute left-8 top-24 w-1 h-32 bg-gradient-to-b from-teal-600 to-transparent"></div>
              )}

              {/* Timeline Dot and Content */}
              <div className="flex gap-6 md:gap-8">
                {/* Dot */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 border-4 border-white dark:border-navy-900 flex items-center justify-center text-white font-bold shadow-elevation-3 flex-shrink-0">
                    {idx + 1}
                  </div>
                </div>

                {/* Content Card */}
                <motion.div
                  className="card p-6 md:p-8 flex-grow mt-2 hover:shadow-elevation-4"
                  whileHover={{ x: 10 }}
                >
                  {/* Year Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 mb-3">
                    <span className="text-sm font-bold text-teal-700 dark:text-teal-400">
                      {exp.period}
                    </span>
                  </div>

                  {/* Title and Organization */}
                  <h3 className="text-xl md:text-2xl font-bold text-navy-900 dark:text-white mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-teal-600 dark:text-teal-400 font-semibold mb-3">
                    {exp.organization}
                  </p>

                  {/* Description */}
                  <p className="text-navy-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-navy-700 dark:text-gray-300 uppercase tracking-wide">
                      Key Achievements
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, aidx) => (
                        <li key={aidx} className="flex items-start gap-2 text-sm text-navy-600 dark:text-gray-400">
                          <span className="text-teal-600 dark:text-teal-400 font-bold mt-0.5">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ExperienceStat
              number="8+"
              label="Years of Clinical Experience"
              description="From residency to independent practice"
            />
            <ExperienceStat
              number="3"
              label="Major Institutions"
              description="Training and practice across leading hospitals"
            />
            <ExperienceStat
              number="∞"
              label="Commitment to Excellence"
              description="Continuous learning and improvement"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceStat({ number, label, description }) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="text-4xl md:text-5xl font-bold text-teal-600 dark:text-teal-400 mb-2">
        {number}
      </div>
      <h4 className="text-lg font-bold text-navy-900 dark:text-white mb-2">
        {label}
      </h4>
      <p className="text-navy-600 dark:text-gray-400 text-sm">
        {description}
      </p>
    </motion.div>
  );
}

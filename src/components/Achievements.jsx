'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/utils/animations';
import { ACHIEVEMENTS } from '@/utils/constants';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-teal-light">
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
            Achievements & Recognition
          </h2>
          <p className="text-lg text-navy-600 dark:text-gray-400 max-w-2xl mx-auto">
            A testament to excellence in surgical practice and continuous professional development
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {ACHIEVEMENTS.map((achievement, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="card p-8 text-center group hover:shadow-elevation-4"
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {achievement.title}
              </h3>
              <p className="text-navy-600 dark:text-gray-400 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics with Counters */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-16 border-t border-gray-200 dark:border-gray-800"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <CounterCard label="Years of Experience" value={8} suffix="+" />
          <CounterCard label="Successful Procedures" value={1000} suffix="+" />
          <CounterCard label="Patient Satisfaction" value={99.2} suffix="%" />
          <CounterCard label="Hospital Partners" value={3} suffix="+" />
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="mt-16 bg-white dark:bg-navy-800 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-8 text-center">
            Professional Certifications & Qualifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-teal-600 dark:text-teal-400 mb-4">
                Academic Degrees
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
                  <div>
                    <p className="font-semibold text-navy-900 dark:text-white">
                      Master of Surgery (MS) - General Surgery
                    </p>
                    <p className="text-sm text-navy-600 dark:text-gray-400">
                      IGIMS Patna (Gold Medalist)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
                  <div>
                    <p className="font-semibold text-navy-900 dark:text-white">
                      Bachelor of Medicine, Bachelor of Surgery (MBBS)
                    </p>
                    <p className="text-sm text-navy-600 dark:text-gray-400">
                      Medical College, Patna
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold text-teal-600 dark:text-teal-400 mb-4">
                Specialized Training
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
                  <div>
                    <p className="font-semibold text-navy-900 dark:text-white">
                      Advanced Laparoscopic Surgery Fellowship
                    </p>
                    <p className="text-sm text-navy-600 dark:text-gray-400">
                      International training programs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
                  <div>
                    <p className="font-semibold text-navy-900 dark:text-white">
                      Emergency Surgical Care Certification
                    </p>
                    <p className="text-sm text-navy-600 dark:text-gray-400">
                      Advanced trauma and emergency management
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CounterCard({ label, value, suffix }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const increment = value / 60;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start * 10) / 10);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      className="text-center"
      variants={staggerItem}
    >
      <div className="text-4xl md:text-5xl font-bold text-teal-600 dark:text-teal-400 mb-2">
        {count}{suffix}
      </div>
      <p className="text-navy-600 dark:text-gray-400 font-medium">
        {label}
      </p>
    </motion.div>
  );
}

import React from 'react';

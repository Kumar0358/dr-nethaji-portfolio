'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/utils/animations';

export default function About() {
  const timeline = [
    {
      year: 'Before 2018',
      title: 'MBBS Graduation',
      description: 'Bachelor of Medicine, Bachelor of Surgery'
    },
    {
      year: '2018-2023',
      title: 'Residency Training',
      description: 'General Surgery - Medical College, Patna'
    },
    {
      year: '2023-2024',
      title: 'Senior Residency',
      description: 'MS General Surgery - IGIMS Patna (Gold Medalist)'
    },
    {
      year: '2025-2026',
      title: 'Consultant Surgeon',
      description: 'Spandana Hospital, Dharmavaram'
    }
  ];

  const philosophy = [
    {
      icon: '🎯',
      title: 'Mission',
      description: 'To provide exceptional surgical care with advanced minimally invasive techniques, prioritizing patient safety and optimal outcomes.'
    },
    {
      icon: '👁️',
      title: 'Vision',
      description: 'To be a leading surgical specialist recognized for excellence, innovation, and compassionate patient care.'
    },
    {
      icon: '❤️',
      title: 'Philosophy',
      description: 'Every patient deserves the highest standard of surgical care. We combine expertise with compassion for best results.'
    },
    {
      icon: '🤝',
      title: 'Patient-First',
      description: 'Your wellbeing is our priority. We believe in transparent communication and involve you in every decision.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-teal-light">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-display-md md:text-display-lg font-display font-bold text-navy-900 dark:text-white mb-4">
            About Dr. Nethaji
          </h2>
          <p className="text-lg text-navy-600 dark:text-gray-400 max-w-2xl mx-auto">
            A journey of excellence from medical training to becoming a leading consultant surgeon
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Timeline */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-8">
              Professional Journey
            </h3>

            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="flex gap-6 relative"
              >
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-teal-600 border-4 border-white dark:border-navy-800 flex items-center justify-center text-white font-bold shadow-elevation-3">
                    {idx + 1}
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="w-1 h-16 bg-gradient-to-b from-teal-600 to-transparent mt-2"></div>
                  )}
                </div>

                {/* Content */}
                <div className="pt-2 pb-4">
                  <p className="text-sm font-bold text-teal-600 dark:text-teal-400">
                    {item.year}
                  </p>
                  <h4 className="text-lg font-bold text-navy-900 dark:text-white mt-1">
                    {item.title}
                  </h4>
                  <p className="text-navy-600 dark:text-gray-400 mt-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Philosophy Cards */}
          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-8">
              Core Philosophy
            </h3>

            {philosophy.map((item, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="card p-6 hover:shadow-elevation-4 group"
                whileHover={{ y: -5 }}
              >
                <div className="flex gap-4">
                  <div className="text-4xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold text-navy-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-navy-600 dark:text-gray-400 mt-2 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* About Paragraph */}
        <motion.div
          className="card p-8 md:p-12 bg-white dark:bg-navy-800 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-6">
            Professional Background
          </h3>
          <div className="space-y-4 text-navy-700 dark:text-gray-300 leading-relaxed">
            <p>
              Dr. Kancham Nethaji is a highly trained and compassionate surgical specialist with extensive experience in advanced laparoscopic and general surgery. With a Gold Medal in MS General Surgery from IGIMS Patna, Dr. Nethaji has dedicated his career to providing exceptional surgical care using the latest minimally invasive techniques.
            </p>
            <p>
              As a Consultant Laparoscopic Surgeon at Spandana Hospital, Dharmavaram, Dr. Nethaji brings together cutting-edge surgical expertise, state-of-the-art technology, and a patient-centered approach to deliver outstanding outcomes. With over 8 years of clinical experience and more than 1,000 successful procedures, Dr. Nethaji is a trusted name in surgical excellence.
            </p>
            <p>
              Dr. Nethaji is committed to continuous learning, regularly participating in international surgical conferences and training programs to stay at the forefront of surgical innovation. His approach combines evidence-based medicine with compassionate patient care, ensuring every patient receives personalized attention and the best possible outcome.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { staggerContainer, staggerItem } from '@/utils/animations';
import { TRUST_VALUES, TESTIMONIALS } from '@/utils/constants';

export default function Trust() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const goToPrevious = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentTestimonial((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-teal-light">
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
            Patient Trust & Values
          </h2>
          <p className="text-lg text-navy-600 dark:text-gray-400 max-w-2xl mx-auto">
            Core principles that guide our surgical practice and patient care
          </p>
        </motion.div>

        {/* Trust Values Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {TRUST_VALUES.map((value, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="card p-8 text-center group hover:shadow-elevation-4 hover:bg-white dark:hover:bg-navy-700"
              whileHover={{ y: -8 }}
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {value.title}
              </h3>
              <p className="text-navy-600 dark:text-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-navy-900 dark:text-white text-center mb-12">
            Patient Testimonials
          </h3>

          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Cards */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="card p-8 md:p-12 bg-white dark:bg-navy-800"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: TESTIMONIALS[currentTestimonial].rating }).map(
                    (_, idx) => (
                      <FiStar
                        key={idx}
                        size={20}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    )
                  )}
                </div>

                {/* Quote */}
                <p className="text-lg md:text-xl text-navy-900 dark:text-white font-light leading-relaxed mb-8 italic">
                  "{TESTIMONIALS[currentTestimonial].feedback}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 border-t border-gray-200 dark:border-gray-700 pt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-navy-600 flex-shrink-0">
                    <img
                      src={TESTIMONIALS[currentTestimonial].image}
                      alt={TESTIMONIALS[currentTestimonial].name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 dark:text-white">
                      {TESTIMONIALS[currentTestimonial].name}
                    </h4>
                    <p className="text-sm text-navy-600 dark:text-gray-400">
                      {TESTIMONIALS[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                onClick={goToPrevious}
                className="p-3 rounded-full bg-white dark:bg-navy-800 border-2 border-teal-600 text-teal-600 hover:bg-teal-50 dark:hover:bg-navy-700 transition-colors shadow-elevation-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiChevronLeft size={24} />
              </motion.button>

              {/* Dots */}
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentTestimonial
                        ? 'bg-teal-600 w-8'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={goToNext}
                className="p-3 rounded-full bg-white dark:bg-navy-800 border-2 border-teal-600 text-teal-600 hover:bg-teal-50 dark:hover:bg-navy-700 transition-colors shadow-elevation-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiChevronRight size={24} />
              </motion.button>
            </div>

            {/* Counter */}
            <div className="text-center mt-6 text-sm text-navy-600 dark:text-gray-400">
              {currentTestimonial + 1} of {TESTIMONIALS.length}
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="card p-6">
              <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">
                99.2%
              </div>
              <p className="text-sm text-navy-600 dark:text-gray-400 mt-2">
                Patient Satisfaction
              </p>
            </div>
            <div className="card p-6">
              <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">
                24/7
              </div>
              <p className="text-sm text-navy-600 dark:text-gray-400 mt-2">
                Available for Emergencies
              </p>
            </div>
            <div className="card p-6">
              <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">
                Gold
              </div>
              <p className="text-sm text-navy-600 dark:text-gray-400 mt-2">
                Medalist Surgeon
              </p>
            </div>
            <div className="card p-6">
              <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">
                ∞
              </div>
              <p className="text-sm text-navy-600 dark:text-gray-400 mt-2">
                Commitment to Excellence
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

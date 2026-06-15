'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import { staggerContainer, staggerItem } from '@/utils/animations';
import { DOCTOR_INFO } from '@/utils/constants';

export default function Hero() {
  const stats = [
    {
      number: '1000+',
      label: 'Successful Procedures',
      suffix: ''
    },
    {
      number: '8+',
      label: 'Years Experience',
      suffix: ''
    },
    {
      number: '99.2%',
      label: 'Patient Satisfaction',
      suffix: ''
    },
    {
      number: '24/7',
      label: 'Emergency Care',
      suffix: ''
    }
  ];

  return (
    <section className="min-h-screen flex items-center pt-24 sm:pt-20 pb-12 px-3 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 dark:bg-teal-900/20 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-100 dark:bg-navy-800/20 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Badge */}
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800 w-fit"
            >
              <span className="text-2xl">🏆</span>
              <span className="text-sm font-semibold text-teal-700 dark:text-teal-300">
                University Gold Medalist
              </span>
            </motion.div>

            {/* Title */}
            <motion.div variants={staggerItem} className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy-900 dark:text-white leading-tight whitespace-nowrap">
                Dr. Kancham Nethaji
              </h1>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800 w-fit">
                <span className="text-sm sm:text-base md:text-lg font-bold text-teal-700 dark:text-teal-300">
                  MS General Surgery
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={staggerItem}
              className="text-lg text-navy-600 dark:text-gray-400 leading-relaxed max-w-lg"
            >
              Consultant Laparoscopic & General Surgeon with expertise in advanced minimally invasive procedures. Dedicated to delivering exceptional surgical care with compassion and precision.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="#appointment"
                className="btn-primary inline-flex items-center justify-center group"
                whileHover={{ scale: 1.05, backgroundColor: '#00a99d' }}
                whileTap={{ scale: 0.95 }}
              >
                Book Appointment
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href={`https://wa.me/${DOCTOR_INFO.whatsapp.replace(/\D/g, '')}?text=Hi%20Dr%20Nethaji`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>WhatsApp Consultation</span>
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#expertise"
                className="btn-secondary inline-flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Expertise
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Professional Portrait */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Image Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-navy-100 dark:from-teal-900/30 dark:to-navy-900/30 rounded-3xl transform rotate-3"></div>

              {/* Image */}
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-premium-lg border-4 border-white dark:border-navy-800"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Image
                  src="src\public\images\netajihome.png"
                  alt="Dr. Kancham Nethaji"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Overlay gradient for premium effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </motion.div>

              {/* Statistics Cards */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white dark:bg-navy-800 rounded-2xl shadow-premium p-6 max-w-xs glass"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="space-y-3">
                  <div className="text-3xl font-bold text-teal-600">
                    <CounterAnimation end={1000} />+
                  </div>
                  <p className="text-sm text-navy-600 dark:text-gray-400">
                    Successful Procedures
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-6 -right-6 bg-white dark:bg-navy-800 rounded-2xl shadow-premium p-6 max-w-xs glass"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="space-y-3">
                  <div className="text-3xl font-bold text-navy-700 dark:text-white">
                    <CounterAnimation end={8} />+
                  </div>
                  <p className="text-sm text-navy-600 dark:text-gray-400">
                    Years Clinical Experience
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Statistics Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-gray-200 dark:border-gray-800"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="text-center space-y-2"
            >
              <div className="text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-400">
                {stat.number}
              </div>
              <p className="text-sm text-navy-600 dark:text-gray-400 leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Simple Counter Animation Component
function CounterAnimation({ end, duration = 2 }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

// Add React import
import React from 'react';

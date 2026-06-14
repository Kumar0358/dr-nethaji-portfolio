'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { staggerContainer, staggerItem } from '@/utils/animations';
import { DOCTOR_INFO } from '@/utils/constants';

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    concern: '',
    date: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setTimeout(() => {
        setFormData({ name: '', phone: '', email: '', concern: '', date: '' });
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="appointment" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-teal-light">
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
            Book an Appointment
          </h2>
          <p className="text-lg text-navy-600 dark:text-gray-400 max-w-2xl mx-auto">
            Schedule your consultation with Dr. Nethaji. Multiple ways to connect with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Form */}
          <motion.div
            className="card p-8 md:p-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <motion.div variants={staggerItem}>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy-900 dark:text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 bg-white dark:bg-navy-800 text-navy-900 dark:text-white transition-colors"
                    placeholder="Your name"
                  />
                </motion.div>

                {/* Phone */}
                <motion.div variants={staggerItem}>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy-900 dark:text-white mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 bg-white dark:bg-navy-800 text-navy-900 dark:text-white transition-colors"
                    placeholder="+91-xxxxxxxxxx"
                  />
                </motion.div>

                {/* Email */}
                <motion.div variants={staggerItem}>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy-900 dark:text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 bg-white dark:bg-navy-800 text-navy-900 dark:text-white transition-colors"
                    placeholder="your@email.com"
                  />
                </motion.div>

                {/* Concern */}
                <motion.div variants={staggerItem}>
                  <label htmlFor="concern" className="block text-sm font-semibold text-navy-900 dark:text-white mb-2">
                    Medical Concern *
                  </label>
                  <textarea
                    id="concern"
                    name="concern"
                    value={formData.concern}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 bg-white dark:bg-navy-800 text-navy-900 dark:text-white transition-colors resize-none"
                    placeholder="Briefly describe your concern"
                  />
                </motion.div>

                {/* Preferred Date */}
                <motion.div variants={staggerItem}>
                  <label htmlFor="date" className="block text-sm font-semibold text-navy-900 dark:text-white mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 bg-white dark:bg-navy-800 text-navy-900 dark:text-white transition-colors"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Submitting...' : 'Request Appointment'}
                </motion.button>

                <p className="text-xs text-navy-600 dark:text-gray-400 text-center">
                  We'll contact you within 24 hours to confirm your appointment.
                </p>
              </form>
            ) : (
              <motion.div
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <FiCheckCircle size={64} className="text-teal-600 dark:text-teal-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">
                  Thank You!
                </h3>
                <p className="text-navy-600 dark:text-gray-400 mb-4">
                  Your appointment request has been received. We'll contact you shortly to confirm.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Right - Quick Contact Options */}
          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Direct Call */}
            <motion.a
              href={`tel:${DOCTOR_INFO.phone}`}
              variants={staggerItem}
              className="card p-8 block hover:shadow-elevation-4 group"
              whileHover={{ x: 10 }}
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl flex-shrink-0 group-hover:scale-125 transition-transform duration-300">
                  📞
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-navy-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    Call Directly
                  </h3>
                  <p className="text-navy-600 dark:text-gray-400 text-sm">
                    {DOCTOR_INFO.phone}
                  </p>
                </div>
              </div>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href={`https://wa.me/${DOCTOR_INFO.whatsapp.replace(/\D/g, '')}?text=Hi%20Dr%20Nethaji`}
              target="_blank"
              rel="noopener noreferrer"
              variants={staggerItem}
              className="card p-8 block hover:shadow-elevation-4 group"
              whileHover={{ x: 10 }}
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl flex-shrink-0 group-hover:scale-125 transition-transform duration-300">
                  💬
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-navy-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    WhatsApp
                  </h3>
                  <p className="text-navy-600 dark:text-gray-400 text-sm">
                    Quick message consultation
                  </p>
                </div>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href={`mailto:${DOCTOR_INFO.email}`}
              variants={staggerItem}
              className="card p-8 block hover:shadow-elevation-4 group"
              whileHover={{ x: 10 }}
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl flex-shrink-0 group-hover:scale-125 transition-transform duration-300">
                  ✉️
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-navy-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    Email
                  </h3>
                  <p className="text-navy-600 dark:text-gray-400 text-sm break-all">
                    {DOCTOR_INFO.email}
                  </p>
                </div>
              </div>
            </motion.a>

            {/* Clinic Address */}
            <motion.div
              variants={staggerItem}
              className="card p-8 bg-gradient-to-br from-teal-50 to-navy-50 dark:from-teal-900/20 dark:to-navy-900/20"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">📍</div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-2">
                    Clinic Address
                  </h3>
                  <p className="text-navy-600 dark:text-gray-400 text-sm leading-relaxed">
                    {DOCTOR_INFO.clinicAddress}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              variants={staggerItem}
              className="card p-8 bg-gradient-to-br from-navy-50 to-teal-50 dark:from-navy-900/20 dark:to-teal-900/20"
            >
              <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-4">
                Available Hours
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-navy-600 dark:text-gray-400">Monday - Friday</span>
                  <span className="font-semibold text-navy-900 dark:text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-600 dark:text-gray-400">Saturday</span>
                  <span className="font-semibold text-navy-900 dark:text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-600 dark:text-gray-400">Sunday</span>
                  <span className="font-semibold text-navy-900 dark:text-white">Emergency Only</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

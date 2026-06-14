'use client';

import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { staggerContainer, staggerItem } from '@/utils/animations';
import { DOCTOR_INFO } from '@/utils/constants';

export default function Contact() {
  const contactMethods = [
    {
      icon: FiPhone,
      label: 'Phone',
      value: DOCTOR_INFO.phone,
      href: `tel:${DOCTOR_INFO.phone}`,
      description: 'Call us for immediate assistance'
    },
    {
      icon: FiMail,
      label: 'Email',
      value: DOCTOR_INFO.email,
      href: `mailto:${DOCTOR_INFO.email}`,
      description: 'Send us your queries'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Spandana Hospital, Dharmavaram',
      href: '#',
      description: DOCTOR_INFO.clinicAddress
    },
    {
      icon: FiClock,
      label: 'Hours',
      value: 'Mon-Sat: 9 AM - 6 PM',
      href: '#',
      description: 'Emergency services 24/7'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Get in Touch
          </h2>
          <p className="text-lg text-navy-600 dark:text-gray-400 max-w-2xl mx-auto">
            We&apos;re here to help. Reach out through any of the following channels.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={idx}
                href={method.href}
                variants={staggerItem}
                className="card p-6 text-center group hover:shadow-elevation-4 hover:bg-gradient-to-br hover:from-teal-50 hover:to-white dark:hover:from-teal-900/20 dark:hover:to-navy-800"
                whileHover={{ y: -8 }}
              >
                <div className="text-4xl text-teal-600 dark:text-teal-400 mb-4 group-hover:scale-125 transition-transform duration-300 inline-block">
                  <Icon size={40} />
                </div>
                <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {method.label}
                </h3>
                <p className="text-sm text-navy-700 dark:text-gray-300 font-semibold mb-2 break-all">
                  {method.value}
                </p>
                <p className="text-xs text-navy-600 dark:text-gray-400">
                  {method.description}
                </p>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Map and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            className="rounded-2xl overflow-hidden shadow-elevation-3 h-96 lg:h-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              title="Spandana Hospital Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.3088477890746!2d85.13773!3d25.59222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58f8f1f1f1f1%3A0x1f1f1f1f1f1f1f1f!2sSpandana%20Hospital!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">
                About Our Clinic
              </h3>
              <p className="text-navy-600 dark:text-gray-400 leading-relaxed mb-4">
                Located at Spandana Hospital in Dharmavaram, our clinic is equipped with state-of-the-art surgical facilities and advanced laparoscopic equipment. We provide comprehensive surgical care with a patient-centric approach.
              </p>
              <p className="text-navy-600 dark:text-gray-400 leading-relaxed">
                Our team is committed to delivering the highest standards of surgical excellence, emergency care, and patient support throughout your treatment journey.
              </p>
            </div>

            {/* Quick Amenities */}
            <div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-4">
                Clinic Amenities
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Modern Laparoscopic Equipment',
                  '24/7 Emergency Services',
                  'Advanced OT Facilities',
                  'Experienced Staff',
                  'Patient Comfort Rooms',
                  'ICU Support'
                ].map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-teal-600 dark:text-teal-400">✓</span>
                    <p className="text-navy-600 dark:text-gray-400 text-sm">
                      {amenity}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              className="card p-6 bg-gradient-to-r from-teal-50 to-navy-50 dark:from-teal-900/20 dark:to-navy-900/20 border-l-4 border-teal-600"
              whileHover={{ x: 5 }}
            >
              <h4 className="font-bold text-navy-900 dark:text-white mb-2">
                Need Emergency Care?
              </h4>
              <p className="text-sm text-navy-600 dark:text-gray-400 mb-4">
                Call us immediately for any surgical emergency. We&apos;re available 24/7.
              </p>
              <motion.a
                href={`tel:${DOCTOR_INFO.phone}`}
                className="inline-flex items-center text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-700 dark:hover:text-teal-300"
                whileHover={{ x: 5 }}
              >
                {DOCTOR_INFO.phone} →
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-800 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-6">
            Connect With Us
          </h3>
          <div className="flex items-center justify-center gap-6">
            {[
              { name: 'Facebook', icon: '👍', href: '#' },
              { name: 'Instagram', icon: '📷', href: '#' },
              { name: 'LinkedIn', icon: '💼', href: '#' },
              { name: 'YouTube', icon: '▶️', href: '#' }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                className="w-12 h-12 rounded-full bg-gray-100 dark:bg-navy-800 flex items-center justify-center text-2xl hover:bg-teal-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

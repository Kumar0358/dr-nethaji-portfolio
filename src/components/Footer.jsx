'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { NAVIGATION, DOCTOR_INFO } from '@/utils/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-navy-800">
          {/* Brand */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-navy-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Dr. Nethaji</h3>
                <p className="text-xs text-gray-400">Surgical Excellence</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Consultant Laparoscopic & General Surgeon providing advanced surgical care with compassion and precision.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {NAVIGATION.slice(0, 4).map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-lg">Specialties</h4>
            <ul className="space-y-2 text-sm">
              {[
                'Laparoscopic Surgery',
                'Emergency Care',
                'Trauma Surgery',
                'General Surgery'
              ].map((service, idx) => (
                <li key={idx}>
                  <span className="text-gray-400">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold text-lg">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${DOCTOR_INFO.phone}`}
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  {DOCTOR_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${DOCTOR_INFO.email}`}
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  {DOCTOR_INFO.email}
                </a>
              </li>
              <li className="text-gray-400 text-xs leading-relaxed">
                {DOCTOR_INFO.clinic}
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.p
            className="text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            &copy; {currentYear} Dr. Kancham Nethaji. All rights reserved.
          </motion.p>

          {/* Legal Links */}
          <motion.div
            className="flex items-center gap-6 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
              Disclaimer
            </a>
          </motion.div>

          {/* Designed By */}
          <motion.p
            className="text-sm text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Designed with care for surgical excellence
          </motion.p>
        </div>

        {/* Medical Disclaimer */}
        <motion.div
          className="mt-8 p-4 bg-navy-800/50 rounded-lg border border-navy-700 text-xs text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="leading-relaxed">
            This website is for informational purposes only. The information provided is not a substitute for professional medical advice. Please consult Dr. Kancham Nethaji or another qualified healthcare professional for medical advice.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

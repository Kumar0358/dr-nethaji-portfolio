'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { NAVIGATION, DOCTOR_INFO } from '@/utils/constants';

export default function Navbar({ isDark, toggleTheme, isScrolled }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-navy-900/90 backdrop-blur-md shadow-elevation-2'
          : 'bg-white/50 dark:bg-navy-900/50 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-gradient-to-br from-teal-600 to-navy-700 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-base sm:text-lg">D</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xs sm:text-sm font-bold text-navy-900 dark:text-white">
                Dr. Nethaji
              </h1>
              <p className="text-xs text-navy-600 dark:text-gray-400">
                Surgical Excellence
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-navy-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium text-sm transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-navy-800 text-navy-700 dark:text-yellow-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>

            {/* CTA Button - Desktop */}
            <motion.a
              href="tel:+919447082828"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium text-sm transition-colors shadow-elevation-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Now
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileOpen ? (
                <FiX size={24} className="text-navy-900 dark:text-white" />
              ) : (
                <FiMenu size={24} className="text-navy-900 dark:text-white" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isMobileOpen ? { height: 'auto' } : { height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col space-y-4 py-4 px-4 bg-white dark:bg-navy-800 rounded-lg mt-2">
            {NAVIGATION.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-navy-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+919447082828"
              className="px-5 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium text-center"
            >
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

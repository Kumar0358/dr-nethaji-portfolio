'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiX } from 'react-icons/fi';
import { staggerContainer, staggerItem } from '@/utils/animations';
import { GALLERY_ITEMS } from '@/utils/constants';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    'all',
    'portraits',
    'hospital',
    'team',
    'conference',
    'awards',
    'training'
  ];

  const filtered = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Gallery
          </h2>
          <p className="text-lg text-navy-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional moments from clinical practice and academic contributions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-colors capitalize ${
                activeCategory === category
                  ? 'bg-teal-600 text-white shadow-elevation-2'
                  : 'bg-gray-100 dark:bg-navy-800 text-navy-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-navy-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-elevation-2 hover:shadow-elevation-4 transition-shadow"
              onClick={() => setSelectedImage(item)}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image */}
              <div className="relative h-64 md:h-72 overflow-hidden bg-gray-200 dark:bg-navy-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4 text-white">
                <div className="text-center space-y-3">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <button className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-navy-900 hover:bg-teal-600 hover:text-white transition-colors">
                    <FiSearch size={20} />
                  </button>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 right-3 bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold capitalize opacity-0 group-hover:opacity-100 transition-opacity">
                {item.category}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors z-10"
              >
                <FiX size={24} />
              </button>

              {/* Image */}
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-2xl"
              />

              {/* Title */}
              <div className="mt-6 text-center text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-sm capitalize text-gray-300">
                  {selectedImage.category}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex justify-center gap-6 mt-6">
                <button
                  onClick={() => {
                    const currentIndex = filtered.findIndex(
                      (item) => item.id === selectedImage.id
                    );
                    setSelectedImage(
                      currentIndex === 0
                        ? filtered[filtered.length - 1]
                        : filtered[currentIndex - 1]
                    );
                  }}
                  className="px-6 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => {
                    const currentIndex = filtered.findIndex(
                      (item) => item.id === selectedImage.id
                    );
                    setSelectedImage(
                      currentIndex === filtered.length - 1
                        ? filtered[0]
                        : filtered[currentIndex + 1]
                    );
                  }}
                  className="px-6 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors"
                >
                  Next
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

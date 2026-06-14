'use client';

import { motion } from 'framer-motion';
import { FiMessageCircle, FiPhone, FiCalendar } from 'react-icons/fi';
import { DOCTOR_INFO } from '@/utils/constants';

export default function FloatingButtons() {
  const buttons = [
    {
      icon: FiMessageCircle,
      href: `https://wa.me/${DOCTOR_INFO.whatsapp.replace(/\D/g, '')}?text=Hi%20Dr%20Nethaji`,
      label: 'WhatsApp',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: FiPhone,
      href: `tel:${DOCTOR_INFO.phone}`,
      label: 'Call',
      color: 'bg-teal-600 hover:bg-teal-700'
    },
    {
      icon: FiCalendar,
      href: '#appointment',
      label: 'Book',
      color: 'bg-blue-600 hover:bg-blue-700'
    }
  ];

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 flex flex-col-reverse items-center gap-3 sm:gap-4 z-40">
      {buttons.map((btn, idx) => {
        const Icon = btn.icon;
        return (
          <motion.a
            key={idx}
            href={btn.href}
            target={btn.href.startsWith('http') ? '_blank' : undefined}
            rel={btn.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`${btn.color} text-white p-3 sm:p-4 rounded-full shadow-elevation-4 transition-all flex items-center justify-center min-h-[48px] min-w-[48px] sm:min-h-[56px] sm:min-w-[56px]`}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            title={btn.label}
            aria-label={btn.label}
          >
            <Icon size={24} />
          </motion.a>
        );
      })}
    </div>
  );
}

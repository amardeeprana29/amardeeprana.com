import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaTimes } from 'react-icons/fa';

const FloatingContact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buttons = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      href: 'mailto:amardeeprana2905@gmail.com',
      color: 'from-accent-cyan to-accent-blue',
    },
    {
      icon: <FaWhatsapp />,
      label: 'WhatsApp',
      href: 'https://wa.me/919031950845',
      color: 'from-green-400 to-green-600',
    },
  ];
  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-40">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-16 right-0 flex flex-col gap-3 mb-3"
              >
                {buttons.map((button, index) => (
                  <motion.a
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ delay: index * 0.1 }}
                    href={button.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-4 py-3 bg-gradient-to-r ${button.color} text-white rounded-full shadow-lg hover:shadow-xl transition-all group`}
                  >
                    <span className="text-xl">{button.icon}</span>
                    <span className="font-mono text-sm whitespace-nowrap">{button.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`w-14 h-14 rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue text-white shadow-lg hover:shadow-xl flex items-center justify-center text-2xl transition-all ${
              isOpen ? 'rotate-45' : ''
            }`}
          >
            {isOpen ? <FaTimes /> : <FaEnvelope />}
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContact;

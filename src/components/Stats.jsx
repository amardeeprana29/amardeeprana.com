import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FaCode, FaProjectDiagram, FaCertificate, FaCoffee } from 'react-icons/fa';

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      icon: <FaProjectDiagram />,
      end: 10,
      suffix: '+',
      label: 'Projects Completed',
      color: 'from-accent-cyan to-accent-blue',
    },
    {
      icon: <FaCode />,
      end: 15,
      suffix: '+',
      label: 'Technologies Mastered',
      color: 'from-accent-blue to-accent-purple',
    },
    {
      icon: <FaCertificate />,
      end: 4,
      suffix: '+',
      label: 'Certifications',
      color: 'from-accent-purple to-accent-cyan',
    },
    {
      icon: <FaCoffee />,
      end: 500,
      suffix: '+',
      label: 'Cups of Coffee',
      color: 'from-accent-cyan to-accent-blue',
    },
  ];

  return (
    <section className="py-16 px-4 bg-primary-medium/30">
      <div className="container mx-auto" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`text-5xl md:text-6xl mb-4 inline-block bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
              >
                {stat.icon}
              </motion.div>
              
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {inView && (
                  <CountUp
                    start={0}
                    end={stat.end}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              
              <p className="text-text-secondary text-sm md:text-base font-mono">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

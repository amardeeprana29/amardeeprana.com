import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import heroImage from '../assets/background-image2.jpg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-10 right-10 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-10 left-10 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center order-2 md:order-1"
        >
          <div className="relative group w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-1 bg-gradient-to-tr from-accent-cyan/6 via-accent-blue/6 to-accent-purple/6 shadow-2xl">
            {/* decorative glow behind the photo */}
            <div className="absolute inset-0 rounded-full -z-10 blur-xl opacity-40 bg-gradient-to-r from-accent-cyan to-accent-blue group-hover:opacity-75 transition duration-700 animate-glow" />

            <img
              src={heroImage}
              alt="Amardeep Rana"
              className="relative rounded-full w-full h-full object-cover border-4 border-accent-cyan/50 hover:border-accent-cyan transition-all duration-300 block"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-accent-cyan font-mono text-sm md:text-base mb-4"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-4 text-text-primary font-roboto"
          >
            Amardeep Rana
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-text-secondary h-16 md:h-20"
          >
            <TypeAnimation
              sequence={[
                'I build web applications.',
                2000,
                'I create user experiences.',
                2000,
                'I solve problems with code.',
                2000,
                'I am a Full Stack Developer.',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="glow-text"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed max-w-2xl"
          >
            I'm a Full Stack Web Developer specializing in building exceptional digital experiences.
            Currently focused on creating responsive web applications with modern technologies like
            <span className="text-accent-cyan"> React.js</span>,
            <span className="text-accent-cyan"> Node.js</span>, and
            <span className="text-accent-cyan"> MongoDB</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex gap-4 flex-wrap"
          >
            <a href="#projects" className="custom-btn">
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-text-secondary text-text-secondary rounded-lg font-semibold hover:border-accent-cyan hover:text-accent-cyan transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

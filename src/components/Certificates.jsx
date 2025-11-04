// React import not required with new JSX transform
import { motion } from 'framer-motion';
import udemyLogo from '../assets/udemy-logo.png';
import motioncutLogo from '../assets/motioncut-logo.png';
import oasisLogo from '../assets/Oasis Infobyte-logo.png';

const Certificates = () => {
  const certificates = [
    {
      title: 'HTML5, CSS3 and JavaScript',
      platform: 'Udemy',
      logo: udemyLogo,
      link: '',
    },
    {
      title: 'Git & GitHub',
      platform: 'Udemy',
      logo: udemyLogo,
      link: 'https://www.udemy.com/certificate/UC-a6fe8704-7d97-495c-bfb5-33bdaaffb24d/',
    },
    {
      title: 'Frontend Web Development Intern',
      platform: 'MotionCut',
      logo: motioncutLogo,
      link: '/File/Motion cut-cer.pdf',
    },
    {
      title: 'Web Development and Designing Intern',
      platform: 'Oasis Infobyte',
      logo: oasisLogo,
      link: '/File/Oasis-  Certificate.pdf',
    },
  ];

  return (
    <section id="certificates" className="py-20 px-4">
      <div className="container mx-auto">
        <h1 className="section-heading">Certifications</h1>
        <p className="section-subheading">Professional certifications and learning achievements</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 mb-4 flex items-center justify-center bg-white rounded-full p-2">
                <img
                  src={cert.logo}
                  alt={`${cert.platform} Logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <h3 className="text-lg font-bold text-white mb-2 font-mono">{cert.title}</h3>

              <p className="text-text-secondary mb-4 text-sm">
                <span className="text-accent-cyan">Platform:</span> {cert.platform}
              </p>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-cyan hover:text-accent-blue transition-colors font-mono text-sm flex items-center gap-2"
                >
                  View Certificate →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

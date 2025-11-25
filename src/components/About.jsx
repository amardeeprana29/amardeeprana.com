// React import not required with new JSX transform
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  const highlights = [
    'Full Stack Web Development',
    'Responsive UI/UX Design',
    'RESTful API Development',
    'Database Management',
    'Problem Solving & DSA',
    'Team Collaboration',
  ];

  return (
    <section id="about" className="py-20 px-4 bg-primary-medium/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-heading">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              <p>
                Hello! I&apos;m{' '}
                <span className="text-accent-cyan font-semibold">Amardeep Rana</span>, a passionate
                <span className="text-accent-cyan"> Full Stack Web Developer</span> with hands-on
                experience in both frontend and backend technologies. I specialize in building
                exceptional digital experiences that are fast, accessible, and visually appealing.
              </p>

              <p>
                During my{' '}
                <span className="text-text-primary">B.Tech in Information Technology</span>,
                I&apos;ve developed several real-world projects including a{' '}
                <span className="text-accent-cyan font-semibold">
                  Crowd-Sourced Disaster Management System
                </span>{' '}
                aimed at improving emergency response using real-time data and clean UI design.
              </p>

              <p>
                I&apos;m also an{' '}
                <span className="text-accent-cyan font-semibold">
                  NCC &apos;C&apos; Certificate
                </span>{' '}
                holder, which has helped me build discipline, leadership, and teamwork skills that I
                bring into every project I work on.
              </p>

              <div className="flex gap-4 flex-wrap mt-8">
                <a href="/File/AMARDEEP_MERN_STACK_RESUME.pdf" download className="custom-btn">
                  Download Resume
                </a>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-accent-cyan">💡</span>
                What I Do
              </h3>
              <ul className="space-y-4">
                {highlights.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-text-primary"
                  >
                    <FaCheckCircle className="text-accent-cyan text-xl flex-shrink-0" />
                    <span className="font-mono">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

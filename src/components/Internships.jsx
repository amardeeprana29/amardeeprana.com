// React import not required with new JSX transform
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBuilding } from 'react-icons/fa';
import sailLogo from '../assets/sail-logo.svg';

const Internships = () => {
  const internships = [
    {
      company: 'Steel Authority of India Limited (SAIL)',
      role: 'IT Intern - Bokaro Steel Plant',
      duration: 'Sep 2025 - Nov 2025',
      tools: 'Network systems, Database handling, System monitoring',
      description:
        'Observed and learned the working of enterprise-level IT operations including network systems, access control, and software workflows under senior IT engineers. Gained theoretical understanding of database handling, system monitoring, and internal IT process flow through guidance and demonstrations. Received exposure to how IT integrates with large-scale steel manufacturing systems and supports industrial operations. Status: Successfully completed internship on 22 November 2025.',
      icon: <FaBuilding />,
      logo: sailLogo,
      certified: true,
    },
    {
      company: 'MotionCut',
      role: 'Frontend Web Development Intern',
      duration: '1 Month (Dec 2023 - Jan 2024)',
      tools: 'HTML, CSS, JavaScript',
      description:
        'Worked on frontend development tasks focused on enhancing user interfaces. Collaborated on real-time web projects and gained hands-on experience in responsive design and UI improvements. Internship offered in collaboration with AICTE.',
      icon: <FaGraduationCap />,
      certified: true,
    },
    {
      company: 'Oasis Infobyte',
      role: 'Web Development and Designing Intern',
      duration: '1 Month (May - June 2023)',
      tools: 'HTML, CSS, JavaScript',
      description:
        'Worked on front-end development tasks to improve UI/UX of static web pages. Gained experience in converting designs to responsive layouts using clean HTML/CSS practices.',
      icon: <FaBuilding />,
      certified: false,
    },
  ];

  return (
    <section id="internships" className="py-20 px-4 bg-primary-medium/20">
      <div className="container mx-auto">
        <h1 className="section-heading">Professional Experience</h1>
        <p className="section-subheading">Real-world project involvement during internships</p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-8 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {internship.logo ? (
                  <div className="w-12 h-12 bg-white rounded-full p-1 flex items-center justify-center">
                    <img
                      src={internship.logo}
                      alt={`${internship.company} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ) : (
                  <span className="text-4xl text-accent-cyan">{internship.icon}</span>
                )}
                <h3 className="text-2xl font-bold text-white">{internship.company}</h3>
              </div>

              <p className="text-text-secondary mb-2 font-mono text-sm">
                <span className="text-accent-cyan">Role:</span> {internship.role}
              </p>

              <p className="text-text-secondary mb-2 font-mono text-sm">
                <span className="text-accent-cyan">Duration:</span> {internship.duration}
              </p>

              <p className="text-text-secondary mb-4 font-mono text-sm">
                <span className="text-accent-cyan">Tools:</span> {internship.tools}
              </p>

              <p className="text-text-primary leading-relaxed">{internship.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaTools, FaDatabase, FaLaptopCode } from 'react-icons/fa';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FaCode />,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Responsive Design', level: 92 },
      ],
    },
    {
      title: 'Backend Development',
      icon: <FaLaptopCode />,
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 75 },
        { name: 'REST APIs', level: 82 },
        { name: 'Java', level: 70 },
      ],
    },
    {
      title: 'Database & Tools',
      icon: <FaDatabase />,
      skills: [
        { name: 'MongoDB', level: 78 },
        { name: 'Firebase', level: 85 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'MySQL', level: 72 },
      ],
    },
    {
      title: 'Developer Tools',
      icon: <FaTools />,
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Chrome DevTools', level: 88 },
        { name: 'Postman', level: 80 },
        { name: 'Figma', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <h1 className="section-heading">Skills & Expertise</h1>
        <p className="section-subheading">Technologies and tools I work with</p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto" ref={ref}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card p-8 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl text-accent-cyan">{category.icon}</span>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-text-primary font-mono text-sm">{skill.name}</span>
                      <span className="text-accent-cyan font-mono text-sm font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-primary-medium rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: idx * 0.1 + index * 0.2 }}
                        className="h-full bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

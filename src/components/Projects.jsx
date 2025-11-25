import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import disasterImg from '../assets/disaster-project.jpg';
import blogifyImg from '../assets/blogify-project.jpg';
import portfolioImg from '../assets/portfolio-project.jpg';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'Library Management System',
      description:
        'Developed a complete Library Management System (MERN) with book management, issue/return tracking, and member handling. Built during my IT internship at Steel Authority of India Limited (SAIL) — Bokaro Steel Plant. Implemented secure REST APIs, JWT authentication, and role-based admin controls. Features include CRUD operations, live search, filtering, and a responsive React UI. Status: Currently under development.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
      image: portfolioImg,
      liveLink: '',
      category: 'Full Stack',
    },
    {
      title: 'Crowd-Sourced Disaster Management System',
      description:
        'A real-time web app for reporting and visualizing disaster locations on an interactive map using Google Maps API. Users can submit disaster data, which is stored and fetched live from Firebase.',
      tech: ['React.js', 'Firebase', 'Google Maps API', 'Styled Components'],
      image: disasterImg,
      liveLink: 'https://disaster-app-37149.web.app/',
      category: 'React',
    },
    {
      title: 'Blogify – Personal Blog Website',
      description:
        'A personal blog platform that allows users to create, update, and delete blog posts with a clean user interface.',
      tech: ['HTML', 'CSS', 'JavaScript', 'EJS'],
      image: blogifyImg,
      liveLink: 'https://amardeeprana29.github.io/Blog/',
      category: 'JavaScript',
    },
    {
      title: 'Personal Portfolio Website',
      description:
        'A responsive portfolio site built to showcase my web development projects, skills, and contact details. Designed with a consistent color theme and clean layout.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: portfolioImg,
      liveLink: 'https://amardeeprana29.github.io/My-Portfolio/',
      category: 'React',
    },
  ];

  const categories = ['All', 'React', 'JavaScript', 'Full Stack'];

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h1 className="section-heading">Things I&apos;ve Built</h1>
        <p className="section-subheading">A selection of my recent work and side projects</p>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                filter === category
                  ? 'bg-accent-cyan text-primary-dark font-bold shadow-lg shadow-accent-cyan/50'
                  : 'bg-primary-medium text-text-secondary border border-accent-cyan/30 hover:border-accent-cyan'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              layout
              className="glass-card overflow-hidden group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
                  {project.title}
                </h4>

                <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-primary hover:text-accent-cyan transition-colors text-sm font-mono"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

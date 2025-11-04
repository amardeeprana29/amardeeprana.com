import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaCode, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const response = await fetch('https://formspree.io/f/mdkzwqwz', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus(''), 3000);
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-primary-medium/20">
      <div className="container mx-auto max-w-2xl">
        <h1 className="section-heading">Get In Touch</h1>
        <p className="section-subheading">
          I&apos;m currently looking for new opportunities. Whether you have a question or just want
          to say hi, I&apos;ll try my best to get back to you!
        </p>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-card p-8 space-y-6"
        >
          <input type="hidden" name="_redirect" value="https://formspree.io/success" />

          <div>
            <input
              type="text"
              name="username"
              autoComplete="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-primary-medium text-text-primary placeholder-text-secondary border border-accent-cyan/30 focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 transition-all font-mono"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-primary-medium text-text-primary placeholder-text-secondary border border-accent-cyan/30 focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 transition-all font-mono"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-primary-medium text-text-primary placeholder-text-secondary border border-accent-cyan/30 focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 transition-all resize-none font-mono"
            ></textarea>
          </div>

          <button type="submit" className="w-full custom-btn font-mono">
            Send Message →
          </button>

          {formStatus === 'success' && (
            <p className="text-accent-cyan text-center font-mono">✓ Message sent successfully!</p>
          )}
          {formStatus === 'error' && (
            <p className="text-red-400 text-center font-mono">
              × Something went wrong. Please try again.
            </p>
          )}
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mt-8"
        >
          <a
            href="https://github.com/Amardeeprana29"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-text-primary hover:text-accent-cyan transition-all duration-300 hover:scale-110 transform"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/amardeeprana29/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-text-primary hover:text-accent-cyan transition-all duration-300 hover:scale-110 transform"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/amardeeprana29/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-text-primary hover:text-accent-cyan transition-all duration-300 hover:scale-110 transform"
            aria-label="LeetCode"
          >
            <FaCode />
          </a>
          <a
            href="https://www.instagram.com/_rajan__rana/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-text-primary hover:text-accent-cyan transition-all duration-300 hover:scale-110 transform"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <p className="text-text-secondary flex items-center justify-center gap-2 font-mono">
            <FaEnvelope className="text-accent-cyan" />
            <a
              href="mailto:amardeeprana2905@gmail.com"
              className="hover:text-accent-cyan transition-colors"
            >
              amardeeprana2905@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

import { motion } from 'motion/react';
import styles from '../styles/About.module.css';
import { aboutData } from '../data.js';
import Skills from './Skills';

const sectionVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', duration: 0.8, bounce: 0.4, staggerChildren: 0.15 }
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', duration: 0.8, bounce: 0.4 }
  },
};

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <motion.div 
        className="container aboutContainer"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className={styles.header} variants={childVariants}>
          <h2 className="sectionTitle">About Me</h2>
          <div className="sectionDivider"></div>
        </motion.div>

        <div className={styles.contentGrid}>
          <motion.div className={styles.textContent} variants={childVariants}>
            <p className={styles.summary}>{aboutData.summary}</p>
            <ul className={styles.highlights}>
              {aboutData.highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <a href="/Nardos_Tsige_Resume.pdf" className={styles.downloadBtn} target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </motion.div>

          <motion.div variants={childVariants}>
            <Skills />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
import { motion } from 'motion/react';
import styles from '../styles/Projects.module.css';
import { projectsData } from '../data.js';
import ProjectCard from './ProjectCard';

const sectionVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', duration: 0.8, bounce: 0.4, staggerChildren: 0.15 }
  },
};

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <motion.div 
        className="container projectsContainer"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', duration: 0.8, bounce: 0.4 }}
        >
          <h2 className="sectionTitle">Featured Projects</h2>
          <div className="sectionDivider"></div>
        </motion.div>

        <div className={styles.projectsGrid}>
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
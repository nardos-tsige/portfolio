import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import styles from '../styles/Projects.module.css';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div 
      className={styles.projectCard}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: 'spring', duration: 0.8, bounce: 0.4, delay: index * 0.1 }}
    >
      <div className={styles.imageContainer}>
        <img src={project.image} alt={project.title} className={styles.projectImage} />
        <div className={styles.imageOverlay}></div>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.liveBadge}>
            <ExternalLink size={12} /> Live
          </a>
        )}
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.githubIcon} aria-label="View Code">
          <Github size={20} />
        </a>
      </div>
      
      <div className={styles.projectContent}>
        <div className={styles.techStack}>
          {project.tech.map((tech, i) => (
            <span key={i} className={styles.techTag}>{tech}</span>
          ))}
        </div>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
      </div>
    </motion.div>
  );
}
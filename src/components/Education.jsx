import { motion } from 'motion/react';
import styles from '../styles/Education.module.css';
import { educationData } from '../data.js';

const sectionVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', duration: 0.8, bounce: 0.4, staggerChildren: 0.15 }
  },
};

export default function Education() {
  return (
    <section id="education" className={styles.educationSection}>
      <motion.div 
        className="container educationContainer"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', duration: 0.8, bounce: 0.4 }}
        >
          <h2 className="sectionTitle">Education</h2>
          <div className="sectionDivider"></div>
        </motion.div>

        <div className={styles.timeline}>
          {educationData.map((item, index) => (
            <motion.div 
              key={item.id}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: 'spring', duration: 0.8, bounce: 0.4, delay: index * 0.15 }}
            >
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <h3 className={styles.degree}>{item.degree}</h3>
                  <span className={styles.period}>{item.period}</span>
                </div>
                <h4 className={styles.institution}>{item.institution}</h4>
                <ul className={styles.achievements}>
                  {item.achievements.map((achieve, i) => (
                    <li key={i}>{achieve}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
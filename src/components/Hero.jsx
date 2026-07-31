import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import styles from '../styles/Hero.module.css';
import { heroData } from '../data.js';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: 'spring', duration: 0.8, bounce: 0.4 }
  },
};

export default function Hero() {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        <motion.div 
          className={styles.leftContent}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants} className={styles.greeting}>{heroData.greeting}</motion.h2>
          <motion.h1 variants={itemVariants} className={styles.name}>{heroData.name}</motion.h1>
          <motion.h3 variants={itemVariants} className={styles.title}>{heroData.title}</motion.h3>
          <motion.p variants={itemVariants} className={styles.bio}>{heroData.bio}</motion.p>
          <motion.div variants={itemVariants} className={styles.buttons}>
            <a href="#contact" className={styles.primaryBtn}>Contact Me</a>
            <a href="/Nardos_Tsige_Resume.pdf" download="Nardos_Tsige_Resume.pdf" className={styles.secondaryBtn} target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className={styles.rightContent}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', duration: 0.8, bounce: 0.4, delay: 0.3 }}
        >
          <div className={styles.imageWrapper}>
            <img src={heroData.imageUrl} alt={heroData.name} className={styles.profileImg} />
            <div className={styles.glowEffect}></div>
          </div>
        </motion.div>
      </div>
      
      <motion.a 
        href="#about" 
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ArrowDown size={28} />
      </motion.a>
    </section>
  );
}
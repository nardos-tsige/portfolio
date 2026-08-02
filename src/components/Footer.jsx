import { Github, Linkedin, Instagram} from 'lucide-react';
import styles from '../styles/Footer.module.css';
import { contactData, heroData } from '../data.js';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <h3 className={styles.logo}>{heroData.name}</h3>
            <p className={styles.tagline}>{heroData.title}</p>
          </div>
          
          <div className={styles.socialLinks}>
            <a href={contactData.github} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={contactData.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} {heroData.name}. All rights reserved.
          </p>
          <a href="#hero" className={styles.backToTop}>
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
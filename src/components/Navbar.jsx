import { Moon, Sun, Menu } from 'lucide-react';
import styles from '../styles/Navbar.module.css';
import { navLinks } from '../data.js';

export default function Navbar() {
  const toggleTheme = () => {
    document.body.classList.toggle('light-mode');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <a href="#">
            <span className={styles.logoIcon}>N</span>
            Nardos Tsige
          </a>
        </div>
        
        <div className={styles.navLinks}>
          {navLinks.map(link => (
            <a key={link.id} href={`#${link.id}`} className={styles.link}>
              {link.label}
            </a>
          ))}
          <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle Theme">
            <span className={styles.moon}><Moon size={18} /></span>
            <span className={styles.sun}><Sun size={18} /></span>
          </button>
        </div>

        <div className={styles.mobileNav}>
          <label className={styles.hamburgerLabel}>
            <input type="checkbox" className={styles.hamburgerCheckbox} />
            <Menu size={28} className={styles.hamburgerIcon} />
            <div className={styles.mobileMenu}>
              {navLinks.map(link => (
                <a key={link.id} href={`#${link.id}`} className={styles.mobileLink}>
                  {link.label}
                </a>
              ))}
              <button onClick={toggleTheme} className={styles.themeToggleMobile}>
                Toggle Theme
              </button>
            </div>
          </label>
        </div>
      </div>
    </nav>
  );
}
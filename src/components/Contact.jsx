import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';
import styles from '../styles/Contact.module.css';
import { contactData } from '../data.js';

const sectionVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', duration: 0.8, bounce: 0.4, staggerChildren: 0.15 }
  },
};

const childVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', duration: 0.8, bounce: 0.4 }
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', duration: 0.6, bounce: 0.4 }
  },
};

export default function Contact() {
   
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    console.log("📨 Form Submitted:", data);
    alert(`Thank you ${data.name}! I will get back to you at ${data.email}.`);
    e.target.reset();
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <motion.div 
        className={`container ${styles.contactContainer}`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className={styles.header} variants={childVariants}>
          <h2 className="sectionTitle">Get In Touch</h2>
          <div className="sectionDivider"></div>
        </motion.div>

        <div className={styles.contactContent}>
          <motion.div className={styles.contactInfo} variants={childVariants}>
            <h3 className={styles.infoTitle}>Contact Information</h3>
            <p className={styles.infoDesc}>
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className={styles.infoList}>
              <motion.div className={styles.infoItem} variants={iconVariants}>
                <div className={styles.iconWrapper}>
                  <Mail size={20} />
                </div>
                <span>{contactData.email}</span>
              </motion.div>
              
              <motion.div className={styles.infoItem} variants={iconVariants}>
                <div className={styles.iconWrapper}>
                  <Phone size={20} />
                </div>
                <span>{contactData.phone}</span>
              </motion.div>
              
              <motion.div className={styles.infoItem} variants={iconVariants}>
                <div className={styles.iconWrapper}>
                  <MapPin size={20} />
                </div>
                <span>{contactData.location}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* added name and id attributes to inputs */}
          <motion.form 
            className={styles.contactForm}
            variants={childVariants}
            onSubmit={handleSubmit}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input type="text" id="name" name="name" className={styles.input} placeholder="John Doe" required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input type="email" id="email" name="email" className={styles.input} placeholder="john@example.com" required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea id="message" name="message" rows={5} className={styles.input} placeholder="Hello, I'd like to talk about..." required></textarea>
            </div>
            
            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}

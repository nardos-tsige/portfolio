import styles from '../styles/SkillCard.module.css';

export default function SkillCard({ name, category }) {
  return (
    <div className={styles.skillCard}>
      <span className={styles.skillCategory}>{category}</span>
      <h4 className={styles.skillName}>{name}</h4>
    </div>
  );
}
import styles from './SectionHeading.module.css';

export function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <header className={`${styles.heading} ${styles[align]}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
  );
}

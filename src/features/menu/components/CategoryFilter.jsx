import styles from './CategoryFilter.module.css';

export function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className={styles.filters} role="tablist" aria-label="Categorias do cardápio">
      {categories.map((category) => (
        <button
          key={category.id}
          role="tab"
          aria-selected={active === category.id}
          className={`${styles.chip} ${active === category.id ? styles.active : ''}`}
          onClick={() => onChange(category.id)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}

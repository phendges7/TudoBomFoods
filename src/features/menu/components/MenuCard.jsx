import { useEffect, useState } from 'react';
import { formatPrice } from '@shared/utils/formatPrice';
import { useCart } from '@features/cart';
import styles from './MenuCard.module.css';

export function MenuCard({ item }) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    if (!justAdded) return undefined;
    const timer = setTimeout(() => setJustAdded(false), 1200);
    return () => clearTimeout(timer);
  }, [justAdded]);

  const handleAdd = () => {
    addItem({ id: item.id, name: item.name, price: item.price, image: item.photo.src });
    setJustAdded(true);
  };

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img src={item.photo.src} alt={item.photo.alt} loading="lazy" />
        {item.tag && <span className={styles.tag}>{item.tag}</span>}
      </div>
      <div className={styles.body}>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className={styles.footer}>
          <div className={styles.price}>
            {item.fromPrice && <small>a partir de</small>}
            <strong>{formatPrice(item.price)}</strong>
          </div>
          <button
            className={`${styles.add} ${justAdded ? styles.added : ''}`}
            onClick={handleAdd}
            aria-label={`Adicionar ${item.name} à sacola`}
          >
            {justAdded ? '✓' : '+'}
          </button>
        </div>
      </div>
    </article>
  );
}

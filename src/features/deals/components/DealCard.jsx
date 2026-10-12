import { useState } from 'react';
import { Button } from '@shared/components';
import { formatPrice } from '@shared/utils/formatPrice';
import { useCart } from '@features/cart';
import { salgados } from '@features/menu';
import styles from './DealCard.module.css';

export function DealCard({ deal }) {
  const { addItem, openCart } = useCart();
  const [salgadoId, setSalgadoId] = useState(salgados[0].id);

  const handleOrder = () => {
    const salgado = salgados.find((item) => item.id === salgadoId);
    addItem({
      id: deal.chooseSalgado ? `${deal.id}:${salgado.id}` : deal.id,
      name: deal.chooseSalgado ? `Combo ${deal.name} (${salgado.name})` : `Combo ${deal.name}`,
      price: deal.price,
      image: deal.photos[0].src,
    });
    openCart();
  };

  return (
    <article className={`${styles.card} ${deal.highlight ? styles.highlight : ''}`}>
      <div className={styles.media}>
        {deal.photos.map((photo) => (
          <img key={photo.src} src={photo.src} alt={photo.alt} loading="lazy" />
        ))}
        <span className={styles.price}>{formatPrice(deal.price)}</span>
      </div>

      <div className={styles.body}>
        <h3>Combo {deal.name}</h3>
        <ul>
          {deal.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {deal.chooseSalgado && (
          <label className={styles.choice}>
            <span>Escolha o salgado</span>
            <select value={salgadoId} onChange={(event) => setSalgadoId(event.target.value)}>
              {salgados.map((salgado) => (
                <option key={salgado.id} value={salgado.id}>
                  {salgado.name}
                </option>
              ))}
            </select>
          </label>
        )}

        <Button variant={deal.highlight ? 'primary' : 'dark'} onClick={handleOrder}>
          Quero esse
        </Button>
      </div>
    </article>
  );
}

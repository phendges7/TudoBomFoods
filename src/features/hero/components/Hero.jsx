import { Button } from '@shared/components';
import { photos } from '@shared/data/photos';
import { useOpeningStatus } from '../hooks/useOpeningStatus';
import styles from './Hero.module.css';

const orbitPhotos = [photos.coxinha, photos.esfiha, photos.cafe, photos.quibe, photos.suco, photos.empada];

export function Hero() {
  const { isOpen, label } = useOpeningStatus();

  return (
    <section id="inicio" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={`${styles.status} ${isOpen ? styles.open : styles.closed}`}>
            <i aria-hidden="true" /> {label}
          </span>
          <h1>
            Tudo bom?
            <br />
            <span>Fica melhor com um salgado quentinho.</span>
          </h1>
          <p>
            Coxinha, quibe, esfiha, pão de queijo e cafezinho — feitos aqui mesmo, com preço que cabe no
            bolso. Peça pelo site e retire sem fila.
          </p>
          <div className={styles.ctas}>
            <Button as="a" href="#cardapio">
              Ver cardápio
            </Button>
            <Button as="a" href="#combos" variant="secondary">
              Combos por R$ 5,00
            </Button>
          </div>
          <ul className={styles.perks}>
            <li>🥟 Salgados a partir de R$ 2,00</li>
            <li>🧀 Pão de queijo a partir de R$ 1,00</li>
          </ul>
        </div>

        <div className={styles.visual}>
          <div className={styles.plate}>
            <img src={photos.paoDeQueijo.src} alt={photos.paoDeQueijo.alt} />
            <span className={styles.priceTag}>
              salgados a partir de
              <strong>R$ 2,00</strong>
            </span>
          </div>
          {orbitPhotos.map((photo, index) => (
            <img
              key={photo.src}
              src={photo.src}
              alt=""
              className={styles.float}
              style={{ '--i': index }}
            />
          ))}
        </div>
      </div>
      <div className={styles.wave} aria-hidden="true" />
    </section>
  );
}

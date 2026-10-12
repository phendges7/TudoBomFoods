import { SectionHeading } from '@shared/components';
import { stores } from '../data/stores';
import styles from './LocationsSection.module.css';

const mapsUrl = (address) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export function LocationsSection() {
  return (
    <section id="lojas" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Nossas lojas"
          title="Tem Tudo de Bom pertinho de você"
          subtitle="Passa lá pra um café — ou peça pelo site e só retire no balcão."
        />
        <div className={styles.grid}>
          {stores.map((store) => (
            <article key={store.id} className={styles.card}>
              <div className={styles.pin} aria-hidden="true">
                📍
              </div>
              <h3>
                {store.name}
                {store.flagship && <span className={styles.flagship}>Loja original</span>}
              </h3>
              <p>{store.address}</p>
              <p className={styles.meta}>🕒 {store.hours}</p>
              <p className={styles.meta}>📞 {store.phone}</p>
              <a className={styles.link} href={mapsUrl(store.address)} target="_blank" rel="noreferrer">
                Como chegar →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

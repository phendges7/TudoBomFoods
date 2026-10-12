import { SectionHeading } from '@shared/components';
import { deals } from '../data/deals';
import { DealCard } from './DealCard';
import styles from './DealsSection.module.css';

export function DealsSection() {
  return (
    <section id="combos" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Combos"
          title="Qualquer combo por R$ 5,00"
          subtitle="Lanche completo, preço de troco. Escolha o seu e retire no balcão."
        />
        <div className={styles.grid}>
          {deals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </div>
    </section>
  );
}

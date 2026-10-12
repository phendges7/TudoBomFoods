import { SectionHeading } from '@shared/components';
import { categories, menuItems } from '../data/menuItems';
import { useMenuFilter } from '../hooks/useMenuFilter';
import { CategoryFilter } from './CategoryFilter';
import { MenuCard } from './MenuCard';
import styles from './MenuSection.module.css';

export function MenuSection() {
  const { activeCategory, setActiveCategory, filteredItems } = useMenuFilter(menuItems);

  return (
    <section id="cardapio" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Cardápio"
          title="Saiu do forno agorinha"
          subtitle="Salgados a partir de R$ 2,00 e pão de queijo a partir de R$ 1,00. Tudo feito aqui mesmo — escolha, adicione à sacola e retire sem fila."
        />
        <CategoryFilter categories={categories} active={activeCategory} onChange={setActiveCategory} />
        <div className={styles.grid}>
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

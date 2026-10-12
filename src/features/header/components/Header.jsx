import { useEffect, useState } from 'react';
import { useCart } from '@features/cart';
import styles from './Header.module.css';

const links = [
  { href: '#combos', label: 'Combos' },
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#sobre', label: 'Nossa história' },
  { href: '#lojas', label: 'Lojas' },
];

export function Header() {
  const { count, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#inicio" className={styles.logo} aria-label="Tudo de Bom Alimentos — início">
          <span className={styles.badge}>TDB</span>
          <span className={styles.wordmark}>
            Tudo de Bom <em>Alimentos</em>
          </span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-label="Principal">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <button className={styles.cart} onClick={openCart} aria-label={`Abrir sacola, ${count} itens`}>
            🛍️
            {count > 0 && <span className={styles.count}>{count}</span>}
          </button>
          <button
            className={styles.burger}
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

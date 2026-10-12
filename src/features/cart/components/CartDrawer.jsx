import { useEffect, useState } from 'react';
import { Button } from '@shared/components';
import { formatPrice } from '@shared/utils/formatPrice';
import { useCart } from '../context/CartContext';
import styles from './CartDrawer.module.css';

export function CartDrawer() {
  const { items, isOpen, total, closeCart, addItem, decrementItem, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (event) => event.key === 'Escape' && closeCart();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, closeCart]);

  useEffect(() => {
    if (!isOpen) setOrderPlaced(false);
  }, [isOpen]);

  const handleCheckout = () => {
    clearCart();
    setOrderPlaced(true);
  };

  return (
    <>
      <div className={`${styles.overlay} ${isOpen ? styles.visible : ''}`} onClick={closeCart} />
      <aside
        className={`${styles.drawer} ${isOpen ? styles.open : ''}`}
        aria-hidden={!isOpen}
        aria-label="Sacola de compras"
      >
        <div className={styles.header}>
          <h2>Sua sacola</h2>
          <button className={styles.close} onClick={closeCart} aria-label="Fechar sacola">
            ✕
          </button>
        </div>

        {orderPlaced ? (
          <div className={styles.empty}>
            <span>🎉</span>
            <p>Pedido recebido!</p>
            <small>Retire no balcão em até 15 minutos.</small>
          </div>
        ) : items.length === 0 ? (
          <div className={styles.empty}>
            <span>🛍️</span>
            <p>Sua sacola está vazia.</p>
            <small>Que tal um pão de queijo quentinho?</small>
          </div>
        ) : (
          <>
            <ul className={styles.list}>
              {items.map((item) => (
                <li key={item.id} className={styles.item}>
                  <img className={styles.thumb} src={item.image} alt="" />
                  <div className={styles.info}>
                    <strong>{item.name}</strong>
                    <span>{formatPrice(item.price * item.quantity)}</span>
                  </div>
                  <div className={styles.qty}>
                    <button onClick={() => decrementItem(item.id)} aria-label={`Remover um ${item.name}`}>
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addItem(item)} aria-label={`Adicionar um ${item.name}`}>
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.footer}>
              <div className={styles.total}>
                <span>Total</span>
                <strong>{formatPrice(total)}</strong>
              </div>
              <Button variant="dark" onClick={handleCheckout} className={styles.checkout}>
                Pedir para retirar
              </Button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

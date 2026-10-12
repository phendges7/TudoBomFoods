import { createContext, useContext, useMemo, useReducer } from 'react';

const CartContext = createContext(null);

const initialState = { items: [], isOpen: false };

function cartReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const existing = state.items.find((item) => item.id === action.product.id);
      const items = existing
        ? state.items.map((item) =>
            item.id === action.product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...state.items, { ...action.product, quantity: 1 }];
      return { ...state, items };
    }
    case 'decrement': {
      const items = state.items
        .map((item) => (item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0);
      return { ...state, items };
    }
    case 'clear':
      return { ...state, items: [] };
    case 'open':
      return { ...state, isOpen: true };
    case 'close':
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const value = useMemo(() => {
    const count = state.items.reduce((sum, item) => sum + item.quantity, 0);
    const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return {
      ...state,
      count,
      total,
      addItem: (product) => dispatch({ type: 'add', product }),
      decrementItem: (id) => dispatch({ type: 'decrement', id }),
      clearCart: () => dispatch({ type: 'clear' }),
      openCart: () => dispatch({ type: 'open' }),
      closeCart: () => dispatch({ type: 'close' }),
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used inside <CartProvider>');
  return context;
}

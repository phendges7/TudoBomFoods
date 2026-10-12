import { useMemo, useState } from 'react';

export function useMenuFilter(items) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = useMemo(
    () =>
      activeCategory === 'all' ? items : items.filter((item) => item.category === activeCategory),
    [items, activeCategory]
  );

  return { activeCategory, setActiveCategory, filteredItems };
}

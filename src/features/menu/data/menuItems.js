import { photos } from '@shared/data/photos';

export const categories = [
  { id: 'all', label: 'Tudo' },
  { id: 'salgados', label: 'Salgados' },
  { id: 'paes', label: 'Pão de Queijo' },
];

export const salgados = [
  {
    id: 'coxinha',
    name: 'Coxinha',
    description: 'Frango desfiado temperado, massa fininha e casquinha crocante.',
    price: 2.0,
    fromPrice: true,
    category: 'salgados',
    photo: photos.coxinha,
    tag: 'Mais pedido',
  },
  {
    id: 'quibe',
    name: 'Quibe',
    description: 'Carne moída com trigo e hortelã, frito na hora. Vai bem com limão.',
    price: 2.0,
    fromPrice: true,
    category: 'salgados',
    photo: photos.quibe,
  },
  {
    id: 'esfiha',
    name: 'Esfiha',
    description: 'Massa macia assada, recheada de carne temperadinha.',
    price: 2.0,
    fromPrice: true,
    category: 'salgados',
    photo: photos.esfiha,
  },
  {
    id: 'empada',
    name: 'Empada',
    description: 'Massa amanteigada que desmancha na boca, recheio cremoso de frango.',
    price: 2.0,
    fromPrice: true,
    category: 'salgados',
    photo: photos.empada,
  },
  {
    id: 'enroladinho',
    name: 'Enroladinho de Salsicha',
    description: 'Salsicha envolvida em massa sequinha e dourada. Clássico de lanchonete.',
    price: 2.0,
    fromPrice: true,
    category: 'salgados',
    photo: photos.enroladinho,
  },
];

export const menuItems = [
  {
    id: 'pao-de-queijo',
    name: 'Pão de Queijo',
    description: 'Crocante por fora, puxa-puxa por dentro. Sai quentinho do forno o dia todo.',
    price: 1.0,
    fromPrice: true,
    category: 'paes',
    photo: photos.paoDeQueijo,
    tag: 'Favorito',
  },
  ...salgados,
];

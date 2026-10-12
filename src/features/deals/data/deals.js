import { photos } from '@shared/data/photos';

export const deals = [
  {
    id: 'combo-salgado-suco',
    name: 'Salgado + Suco',
    items: ['1 salgado à sua escolha', '1 copo de suco'],
    price: 5.0,
    photos: [photos.coxinha, photos.suco],
    chooseSalgado: true,
  },
  {
    id: 'combo-pao-com-ovo',
    name: 'Pão com Ovo',
    items: ['1 pão francês', '1 ovo na chapa'],
    price: 5.0,
    photos: [photos.paoComOvo],
    highlight: true,
  },
  {
    id: 'combo-salgado-cafe',
    name: 'Salgado + Café',
    items: ['1 salgado à sua escolha', '1 cafezinho'],
    price: 5.0,
    photos: [photos.empada, photos.cafe],
    chooseSalgado: true,
  },
];

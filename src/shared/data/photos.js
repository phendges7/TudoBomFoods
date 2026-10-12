// Photos from Wikimedia Commons (credits kept in `credit` in case they are shown again).
// Replace with the shop's own photos whenever they're available.

// Prefix with the deploy base path ("/" in dev, "/TudoBomFoods/" on GitHub Pages).
const image = (file) => `${import.meta.env.BASE_URL}images/${file}`;

const BY_SA_4 = { license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0' };
const BY_SA_3 = { license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0' };
const BY_SA_2 = { license: 'CC BY-SA 2.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0' };

export const photos = {
  coxinha: {
    src: image('coxinha.jpg'),
    alt: 'Coxinha de frango cortada ao meio mostrando o recheio',
    credit: {
      author: 'Sintegrity',
      ...BY_SA_4,
      source: 'https://commons.wikimedia.org/wiki/File:Coxinha_-_iguaria_brasileira_01.jpg',
    },
  },
  paoDeQueijo: {
    src: image('pao-de-queijo.jpg'),
    alt: 'Cesta cheia de pães de queijo dourados',
    credit: {
      author: 'Murilo Manzini',
      ...BY_SA_4,
      source: 'https://commons.wikimedia.org/wiki/File:Cheesebread.jpg',
    },
  },
  esfiha: {
    src: image('esfiha.jpg'),
    alt: 'Esfiha fechada assada',
    credit: { author: 'Carioca', ...BY_SA_3, source: 'https://commons.wikimedia.org/wiki/File:Sfiha.jpg' },
  },
  quibe: {
    src: image('quibe.jpg'),
    alt: 'Quibes fritos com recheio de queijo cremoso',
    credit: {
      author: 'E Sortica',
      license: 'CC BY 2.5',
      licenseUrl: 'https://creativecommons.org/licenses/by/2.5',
      source: 'https://commons.wikimedia.org/wiki/File:Quibe_frito.JPG',
    },
  },
  empada: {
    src: image('empada.jpg'),
    alt: 'Bandeja de empadas de frango recém-assadas',
    credit: {
      author: 'Eduardo P',
      ...BY_SA_3,
      source: 'https://commons.wikimedia.org/wiki/File:Empadas_de_frango_Vila_Isabel_Rio_de_Janeiro_Brasil.jpg',
    },
  },
  enroladinho: {
    src: image('enroladinho.jpg'),
    alt: 'Enroladinho de salsicha frito',
    credit: {
      author: 'Sintegrity',
      ...BY_SA_4,
      source: 'https://commons.wikimedia.org/wiki/File:Enroladinho_de_salsicha_04.jpg',
    },
  },
  suco: {
    src: image('suco-laranja.jpg'),
    alt: 'Copo de suco de laranja',
    credit: {
      author: 'USDA (edit by Arad)',
      license: 'Domínio público',
      licenseUrl: '',
      source: 'https://commons.wikimedia.org/wiki/File:Orange_juice_1_edit1.jpg',
    },
  },
  cafe: {
    src: image('cafe.jpg'),
    alt: 'Xícara de café no balcão da padaria',
    credit: {
      author: 'Wagner Tamanaha',
      ...BY_SA_2,
      source:
        'https://commons.wikimedia.org/wiki/File:Caf%C3%A9_Espresso_com_Leite_@_Panificadora_Marpao_(6934351594).jpg',
    },
  },
  paoComOvo: {
    src: image('pao-com-ovo.jpg'),
    alt: 'Pão francês com ovo mexido e uma caneca de café',
    credit: {
      author: 'Projeto Transite',
      ...BY_SA_2,
      source: 'https://commons.wikimedia.org/wiki/File:P%C3%A3o_com_ovo_e_caf%C3%A9.jpg',
    },
  },
};

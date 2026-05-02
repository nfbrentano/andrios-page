/**
 * Dados dos projetos do portfólio.
 *
 * TODO: Substituir os dados fictícios por informações reais dos projetos do Ândrio.
 * TODO: Substituir as URLs de imagem (picsum.photos) por imagens reais em public/images/.
 */

const projects = [
  {
    id: 1,
    title: 'Campanha Yelum Seguros',
    type: 'Publicidade',
    description:
      'Concepção de layout 3D para cena central de filme institucional, focando na interação entre personagens e ambiente simbólico de proteção. Desenvolvimento de volumetria do cenário e estudo de fluxos de câmera para captação em estúdio.',
    credits: {
      cliente: 'Yelum Seguros',
      produtora: 'Produtora Zeppelin',
      diretorDeArte: 'Ana Silva',
      ano: '2024',
    },
    images: [
      'https://picsum.photos/seed/yelum1/1200/800',
      'https://picsum.photos/seed/yelum2/1200/800',
      'https://picsum.photos/seed/yelum3/1200/800',
    ],
    cover: 'https://picsum.photos/seed/yelum1/800/450',
  },
  {
    id: 2,
    title: 'Curta-Metragem "Horizonte Interior"',
    type: 'Filme',
    description:
      'Layout 3D completo para set de curta-metragem de drama, definindo espacialidade de cômodos, iluminação natural simulada e pontos de câmera. Integração com equipe de arte para construção de cenário prático baseado no modelo 3D.',
    credits: {
      cliente: 'Festival de Cinema do Sul',
      produtora: 'Lume Filmes',
      diretorDeArte: 'Carlos Mendes',
      ano: '2024',
    },
    images: [
      'https://picsum.photos/seed/horizonte1/1200/800',
      'https://picsum.photos/seed/horizonte2/1200/800',
    ],
    cover: 'https://picsum.photos/seed/horizonte1/800/450',
  },
  {
    id: 3,
    title: 'Campanha Inverno — Marca Têxtil',
    type: 'Publicidade',
    description:
      'Cenografia 3D para campanha de moda inverno, simulando ambientes internos aconchegantes com texturas de madeira, tecidos e iluminação quente. Estudos de ângulos de câmera para catálogo e vídeo promocional.',
    credits: {
      cliente: 'Dudalina',
      produtora: 'Studio Nórdico',
      diretorDeArte: 'Fernanda Luz',
      ano: '2023',
    },
    images: [
      'https://picsum.photos/seed/inverno1/1200/800',
      'https://picsum.photos/seed/inverno2/1200/800',
      'https://picsum.photos/seed/inverno3/1200/800',
    ],
    cover: 'https://picsum.photos/seed/inverno1/800/450',
  },
  {
    id: 4,
    title: 'Vídeo Institucional — Cooperativa Agrícola',
    type: 'Institucional',
    description:
      'Concepção de layout 3D para set institucional com elementos de agronegócio, unindo referências rurais e tecnologia. Definição de volumetria, escala e posicionamento de elementos cenográficos para filmagem em estúdio chroma.',
    credits: {
      cliente: 'Cooperativa Languiru',
      produtora: 'Dois Filmes',
      diretorDeArte: 'Rafael Torres',
      ano: '2023',
    },
    images: [
      'https://picsum.photos/seed/coop1/1200/800',
      'https://picsum.photos/seed/coop2/1200/800',
    ],
    cover: 'https://picsum.photos/seed/coop1/800/450',
  },
  {
    id: 5,
    title: 'Longa "Território Invisível"',
    type: 'Filme',
    description:
      'Layout 3D de três cenários distintos para longa-metragem de ficção científica. Desenvolvimento de ambientes futuristas com volumetria complexa, definição de corredores de câmera e simulação de iluminação dramática para composição VFX.',
    credits: {
      cliente: 'Ancine / Fundo Setorial',
      produtora: 'Casa de Cinema',
      diretorDeArte: 'Mariana Borges',
      ano: '2024',
    },
    images: [
      'https://picsum.photos/seed/territorio1/1200/800',
      'https://picsum.photos/seed/territorio2/1200/800',
      'https://picsum.photos/seed/territorio3/1200/800',
    ],
    cover: 'https://picsum.photos/seed/territorio1/800/450',
  },
  {
    id: 6,
    title: 'Campanha Digital — Fintech',
    type: 'Publicidade',
    description:
      'Criação de layout 3D minimalista e futurista para campanha de lançamento de aplicativo financeiro. Cenário clean com elementos geométricos flutuantes e iluminação neon, otimizado para captação em volume virtual.',
    credits: {
      cliente: 'NovaPay',
      produtora: 'Electra Filmes',
      diretorDeArte: 'Lucas Braga',
      ano: '2024',
    },
    images: [
      'https://picsum.photos/seed/fintech1/1200/800',
      'https://picsum.photos/seed/fintech2/1200/800',
    ],
    cover: 'https://picsum.photos/seed/fintech1/800/450',
  },
  {
    id: 7,
    title: 'Série Documental — Patrimônio Histórico',
    type: 'Filme',
    description:
      'Reconstrução 3D de edificações históricas para série documental sobre patrimônio arquitetônico gaúcho. Modelagem volumétrica a partir de plantas originais e fotografias de época, com definição de trajetos de câmera para drone virtual.',
    credits: {
      cliente: 'RBS TV',
      produtora: 'Ponto de Cultura Filmes',
      diretorDeArte: 'Camila Stein',
      ano: '2023',
    },
    images: [
      'https://picsum.photos/seed/patrimonio1/1200/800',
      'https://picsum.photos/seed/patrimonio2/1200/800',
      'https://picsum.photos/seed/patrimonio3/1200/800',
    ],
    cover: 'https://picsum.photos/seed/patrimonio1/800/450',
  },
  {
    id: 8,
    title: 'Campanha Verão — Resort',
    type: 'Publicidade',
    description:
      'Layout 3D de cenário de resort tropical para campanha de verão. Definição de ambientes externos com piscinas, vegetação e arquitetura contemporânea, incluindo simulação de luz solar em diferentes horários para guiar a equipe de filmagem.',
    credits: {
      cliente: 'Costão do Santinho',
      produtora: 'Sal Filmes',
      diretorDeArte: 'Juliana Costa',
      ano: '2024',
    },
    images: [
      'https://picsum.photos/seed/resort1/1200/800',
      'https://picsum.photos/seed/resort2/1200/800',
    ],
    cover: 'https://picsum.photos/seed/resort1/800/450',
  },
];

export default projects;

import { CategoryI, ProductI } from './interfaces';
import { v4 as uuidv4 } from 'uuid';

// Default products
export const defaultProds: ProductI[] = [
  {
    id: uuidv4(),
    code: '1',
    title: 'Resident Evil 2 Remake',
    description:
      'Resident Evil 2 Remake es una nueva versión del clásico de Capcom de 1998, que se lanzó originalmente para PlayStation. En esta nueva versión, los jugadores se sumergirán en la historia de Leon S. Kennedy y Claire Redfield, dos nuevos personajes que se unen a la lucha contra el virus T-Veronica. Resident Evil 2 Remake es un juego de acción y terror en tercera persona que se desarrolla en una ciudad destruida por un virus biológico.',
    price: 19.99,
    stock: 10,
    image: 'assets/images/resident_evil_2.jpg',
  },
  {
    id: uuidv4(),
    code: '2',
    title: 'Resident Evil 4 Remake',
    description:
      'Sobrevivir es solo el principio. Seis años después de la catástrofe biológica en Raccoon City, el agente Leon S. Kennedy, uno de los supervivientes del desastre, ha sido enviado a rescatar a la hija del presidente, a quien han secuestrado. Siguiendo su rastro, llega a una apartada población europea, donde sus habitantes sufren un mal terrible. Así comienza esta historia de un arriesgado rescate y terror escalofriante donde se cruzan la vida y la muerte, y el miedo y la catarsis. Con una mecánica de juego modernizada, una historia reimaginada y unos gráficos espectacularmente detallados, Resident Evil 4 Remake supone el renacimiento de un gigante del mundo de los videojuegos.',
    price: 39.99,
    stock: 20,
    image: 'assets/images/resident_evil_4.jpg',
  },
  {
    id: uuidv4(),
    code: '3',
    title: 'Silent Hill 3',
    description:
      'Silent Hill 3 es un videojuego de survival horror, desarrollado por Team Silent y publicado por Konami en 2003 para la consola PlayStation 2. Es la tercera entrega de la serie Silent Hill y se desarrolla diecisiete años después de los acontecimientos de Silent Hill.',
    price: 29.99,
    stock: 15,
    image: 'assets/images/silent_hill_3.jpg',
  },
  {
    id: uuidv4(),
    code: '4',
    title: 'Super Mario Odyssey',
    description:
      'Acompaña a Mario en una aventura en 3D enorme por todo el planeta usando sus nuevas habilidades para recoger lunas que servirán de combustible a tu aeronave, la Odyssey. ¡Y entretanto, rescata a la princesa Peach de las garras de Bowser!',
    price: 61.99,
    stock: 50,
    image: 'assets/images/mario_odyssey.jpg',
  },
  {
    id: uuidv4(),
    code: '5',
    title: 'Grand Theft Auto V',
    description:
      'Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto desarrollado por la compañía británica Rockstar North y distribuido por Rockstar Games. Un joven estafador callejero, un ladrón de bancos retirado y un psicópata aterrador se meten en un lío, y tendrán que llevar a cabo una serie de peligrosos golpes para sobrevivir en una ciudad en la que no pueden confiar en nadie, y mucho menos los unos en los otros.',
    price: 19.99,
    stock: 30,
    image: 'assets/images/gta_v.jpg',
  },
];

// Default categories
export const defaultCats: CategoryI[] = [
  {
    id: uuidv4(),
    name: 'Juegos de terror',
    products: defaultProds.slice(0, 3),
  },
  {
    id: uuidv4(),
    name: 'Juegos de plataformas',
    products: defaultProds.slice(3, 4),
  },
  {
    id: uuidv4(),
    name: 'Juegos de acción',
    products: defaultProds.slice(4, 5),
  },
];

import user1 from '../images/user-1.png';
import user2 from '../images/user-2.png';
import user3 from '../images/user-3.png';
import rec1 from '../images/rec-1.png';
import rec2 from '../images/rec-2.png';
import rec3 from '../images/rec-3.png';

import { Button } from '../Button';

import { Link } from 'react-router-dom';

export const productData = [
  {
    img: user1,
    alt: 'User',
    name: 'Casual Gamer',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.',
    path: '/standards'
  },
  {
    img: user2,
    alt: 'User',
    name: 'Pro Gamer',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.',
    path: '/standards'
  },
  {
    img: user3,
    alt: 'User',
    name: 'Streamer',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.',
    path: '/standards' 
  }
];

export const productDataTwo = [
  {
    img: rec1,
    alt: 'PC',
    name: 'Diamond Preset',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.',
    price: '$1999.99',
    path: '/customize'
  },
  {
    img: rec2,
    alt: 'PC',
    name: 'Iridium Preset',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.',
    price: '$2499.99',
    path: '/customize'
  },
  {
    img: rec3,
    alt: 'PC',
    name: 'Titanium Preset',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.',
    price: '$2999.99',
    path: '/customize'
  }
];

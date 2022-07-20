import user1 from '../images/user-1.png';
import user2 from '../images/user-2.png';
import user3 from '../images/user-3.png';

import std1 from '../images/std-1.png';
import std2 from '../images/std-2.png';
import std3 from '../images/std-3.png';

import rec1 from '../images/rec-1.png';
import rec2 from '../images/rec-2.png';
import rec3 from '../images/rec-3.png';

import { Button } from '../Button';

import { Link } from 'react-router-dom';


// User type

export const productData = [
  {
    img: user1,
    alt: 'User',
    name: 'Casual Gamer',
    desc:
      'A person who plays games occasionally and does not need all the latest and greatest technology',
    path: '/standards'
  },
  {
    img: user2,
    alt: 'User',
    name: 'Pro Gamer',
    desc:
      'A person who plays games competitively and needs the best hardware that will give them an edge on their oppenents',
    path: '/standards'
  },
  {
    img: user3,
    alt: 'User',
    name: 'Streamer',
    desc:
      'A person who streams their games and needs the hardware that will let them focous on creating their content',
    path: '/standards' 
  }
];

// User Standard


export const productDataTwo = [
  {
    img: std1,
    alt: 'Standard',
    name: 'HD',
    desc:
      'Select this option if you would primarily game at 1080p and have a monitor that is 21 to 27 inches in size',
    path: '/recommendations'
  },
  {
    img: std2,
    alt: 'Standard',
    name: 'QHD ',
    desc:
      'Select this option if you would primarily game at 1440p and have a monitor that is 27 to 32 inches in size',
    path: '/reccomendations'
  },
  {
    img: std3,
    alt: 'Standard',
    name: '4k ',
    desc:
      'Select this option if you would primarily game at 2160p and have a monitor that is 27 inches or greater in size',
    path: '/reccomendations'
  }
];


// User Reccomendation

export const productDataThree = [
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

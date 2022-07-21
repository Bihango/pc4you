import user1 from '../images/user-1.png';
import user2 from '../images/user-2.png';
import user3 from '../images/user-3.png';

import std1 from '../images/std-1.png';
import std2 from '../images/std-2.png';
import std3 from '../images/std-3.png';

import rec1 from '../images/rec-1.png';
import rec2 from '../images/rec-2.png';
import rec3 from '../images/rec-3.png';


import saph from '../images/saph.png';
import emr from '../images/emr.png';


import cpu3600 from '../images/3600.png';
import cpu5600x from '../images/5600x.png';
import cpu5800x from '../images/5800x.png';


import gpu3080 from '../images/3080.jpg';
import gpu3070 from '../images/3070.jpg';
import gpu3060 from '../images/3060.jpg';


import masus from '../images/masus.jpg';
import mgiga from '../images/mgiga.jpg';
import mmsi from '../images/mmsi.jpg';




// User type

export const productData = [
  {
    img: user1,
    alt: 'User',
    name: 'Casual Gamer',
    desc:
      'A person who plays games occasionally and does not need all the latest and greatest technology to have a good experience',
    path: '/standards'
  },
  {
    img: user2,
    alt: 'User',
    name: 'Pro Gamer',
    desc:
      'A person who plays games competitively and needs the best hardware that will give them a competetive edge against their oppenents',
    path: '/standards'
  },
  {
    img: user3,
    alt: 'User',
    name: 'Streamer',
    desc:
      'A person who streams their games and wants to ensure the best quality for their viewers so they can focus on content creation ',
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
    path: '/recommendations'
  },
  {
    img: std3,
    alt: 'Standard',
    name: '4k ',
    desc:
      'Select this option if you would primarily game at 2160p and have a monitor that is 27 inches or greater in size',
    path: '/recommendations'
  }
];


// User Reccomendation

export const productDataThree = [
  {
    img: rec1,
    alt: 'PC',
    name: 'Diamond Preset',
    desc:
      'Features a RTX 3080, Ryzen 5 5700X, 1TB SSD, 750W PSU and 16GB Ram  ',
    price: '$1999.99',
    path: '/customize'
  },
  {
    img: rec2,
    alt: 'PC',
    name: 'Platinum Preset',
    desc:
      'Features a RTX 3080TI, Ryzen 5 5800, 1TB SSD 800W PSU and 32GB Ram  ',
    price: '$2499.99',
    path: '/customize'
  },
  {
    img: rec3,
    alt: 'PC',
    name: 'Titanium Preset',
    desc:
      'Features a RTX 3090, Ryzen 9 5900X, 2TB SSD 1000 Watt PSU and 32GB Ram ',
    price: '$2999.99',
    path: '/customize'
  }

];

//custom pcs

export const productDataPlatinum = [
  {
    img: rec2,
    alt: 'PC',
    name: 'Platinum Preset',
    desc:
      'Features a RTX 3080TI, Ryzen 5 5800, 1TB SSD 800W PSU and 32GB Ram  ',
    price: '$2499.99',
    path: '/cart'
  },
];


export const productDataSapphaire = [
  {
    img: saph,
    alt: 'PC',
    name: 'Sapphaire Preset',
    desc:
      'Features a RTX 3070, Ryzen 5 5600x, 1TB SSD 750W PSU and 16GB Ram  ',
    price: '$1599.99',
    path: '/cart'
  },
];


export const productDataEmerald = [
  {
    img: emr,
    alt: 'PC',
    name: 'Emerald Preset',
    desc:
      'Features a RTX 3060, Ryzen 5 3600x, 500GB SSD 650W PSU and 16GB Ram  ',
    price: '$999.99',
    path: '/cart'
  },
];


//cpu
export const productData3600 = [
  {
    img: cpu3600,
    alt: 'PC',
    name: 'AMD Ryzen 5 3600 ',
    desc:
      '6 cores and 12 processing threads bundled with the quiet AMD wraith stealth cooler',
    price: '$199.99',
    path: '/cart'
  },
];


export const productData5600x = [
  {
    img: cpu5600x,
    alt: 'PC',
    name: 'AMD Ryzen 5 5600X',
    desc:
      "AMD's fastest 6 core processor for mainstream desktop, with 12 processing threads",
    price: '$269.99',
    path: '/cart'
  },
];


export const productData5800x = [
  {
    img: cpu5800x,
    alt: 'PC',
    name: 'AMD Ryzen 5 5800X',
    desc:
      "AMD's fastest 8 core processor for mainstream desktop, with 16 procesing threads",
    price: '$399.99',
    path: '/cart'
  },
];

//gpus

export const productData3080 = [
  {
    img: gpu3080,
    alt: 'PC',
    name: 'NVIDIA GeForce RTX 3080 ',
    desc:
      'Features 10GB of GDDR6X memory and clock speeds of up to 1710MHz',
    price: '$1029.99',
    path: '/cart'
  },
];

export const productData3070 = [
  {
    img: gpu3070,
    alt: 'PC',
    name: 'GIGABYTE GeForce RTX 3070 ',
    desc:
      'Features 8GB of GDDR6 memory and clock speeds of up to 1830MHz',
    price: '$799.99',
    path: '/cart'
  },
];

export const productData3060 = [
  {
    img: gpu3060,
    alt: 'PC',
    name: 'EVGA GeForce RTX 3060 ',
    desc:
      'Features 12GB of GDDR6 memory and clock speeds of up to 1882Mhz',
    price: '$589.99',
    path: '/cart'
  },
];

//mobos

export const productDataMasus = [
  {
    img: masus,
    alt: 'PC',
    name: 'ASUS ROG Maximus XIII Hero ',
    desc:
      'Ready for 2nd, 3rd Gen AMD Ryzen processors and 3rd Gen AMD Ryzen processors',
    price: '$329.99',
    path: '/cart'
  },
];


export const productDataMgiga = [
  {
    img: mgiga,
    alt: 'PC',
    name: 'Gigabyte X570 AORUS MASTER ',
    desc:
      'Supports 1st, 2nd and 3rd Gen AMD Ryzen processors, plus more',
    price: '$299.99',
    path: '/cart'
  },
];

export const productDataMmsi = [
  {
    img: mmsi,
    alt: 'PC',
    name: 'MSI B450 GAMING PRO Carbon Max',
    desc:
      'Designed for 1st, 2nd and 3rd Gen AMD Ryzen processors',
    price: '$199.99',
    path: '/cart'
  },
];
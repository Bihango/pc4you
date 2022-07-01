import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check Out Our Preconfigured Models</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              img src="https://i.imgur.com/ivZUoJB.jpg"
              text='Emerald Preset PC Starting at            $999'
              label='Basic'
              path='/customize'
            />
            <CardItem
              img src="https://i.imgur.com/H93ew36.jpg"
              text='Sapphaire Preset PC Starting at          $1999'
              label='Professional'
              path='/customize'
            />
            <CardItem
              img src="https://i.imgur.com/b3oQ9Jd.jpg"
              text='Platinum Preset PC Starting at           $2999'
              label='Enthusiast'
              path='/customize'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

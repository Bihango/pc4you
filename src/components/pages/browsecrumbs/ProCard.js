import React from 'react';
import '../../Cards.css';
import CardItem from '../../CardItem';

function ProCard() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
           <CardItem
              img src="https://i.imgur.com/H93ew36.jpg"
              text='           Sapphaire Preset PC                       Starting at $1599'
              label='Professional'
              path='/sapphairepreset'
            />
            <CardItem
              img src="https://i.imgur.com/H93ew36.jpg"
              text='           Sapphaire Preset PC                       Starting at $1599'
              label='Professional'
              path='/sapphairepreset'
            />
            <CardItem
              img src="https://i.imgur.com/H93ew36.jpg"
              text='           Sapphaire Preset PC                       Starting at $1599'
              label='Professional'
              path='/sapphairepreset'
            />
          </ul>

          <ul className='cards__items'>
           <CardItem
              img src="https://i.imgur.com/H93ew36.jpg"
              text='           Sapphaire Preset PC                       Starting at $1599'
              label='Professional'
              path='/sapphairepreset'
            />
            <CardItem
              img src="https://i.imgur.com/H93ew36.jpg"
              text='           Sapphaire Preset PC                       Starting at $1599'
              label='Professional'
              path='/sapphairepreset'
            />
            <CardItem
              img src="https://i.imgur.com/H93ew36.jpg"
              text='           Sapphaire Preset PC                       Starting at $1599'
              label='Professional'
              path='/sapphairepreset'
            />
          </ul>
          
          
        </div>
      </div>
    </div>
  );
}

export default ProCard;

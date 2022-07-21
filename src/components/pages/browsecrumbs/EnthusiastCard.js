import React from 'react';
import '../../Cards.css';
import CardItem from '../../CardItem';

function EnthusiastCard() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
           <CardItem
              img src="https://i.imgur.com/b3oQ9Jd.jpg"
              text='           Platinum Preset PC                    Starting at $2499'
              label='Enthusiast'
              path='/platinumpreset'
            />
            <CardItem
              img src="https://i.imgur.com/b3oQ9Jd.jpg"
              text='           Platinum Preset PC                    Starting at $2499'
              label='Enthusiast'
              path='/platinumpreset'
            />
            <CardItem
              img src="https://i.imgur.com/b3oQ9Jd.jpg"
              text='           Platinum Preset PC                    Starting at $2499'
              label='Enthusiast'
              path='/platinumpreset'
            />
          </ul>
          <ul className='cards__items'>
           <CardItem
              img src="https://i.imgur.com/b3oQ9Jd.jpg"
              text='           Platinum Preset PC                    Starting at $2499'
              label='Enthusiast'
              path='/platinumpreset'
            />
            <CardItem
              img src="https://i.imgur.com/b3oQ9Jd.jpg"
              text='           Platinum Preset PC                    Starting at $2499'
              label='Enthusiast'
              path='/platinumpreset'
            />
            <CardItem
              img src="https://i.imgur.com/b3oQ9Jd.jpg"
              text='           Platinum Preset PC                    Starting at $2499'
              label='Enthusiast'
              path='/platinumpreset'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default EnthusiastCard;

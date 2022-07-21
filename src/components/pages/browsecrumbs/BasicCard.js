import React from 'react';
import '../../Cards.css';
import CardItem from '../../CardItem';

function BasicCard() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
           <CardItem
              img src="https://i.imgur.com/ivZUoJB.jpg"
              text='            Emerald Preset PC              Starting at $999'
              label='Basic'
              path='/emeraldpreset'
            />
            <CardItem
              img src="https://i.imgur.com/ivZUoJB.jpg"
              text='            Emerald Preset PC              Starting at $999'
              label='Basic'
              path='/emeraldpreset'
            />
            <CardItem
              img src="https://i.imgur.com/ivZUoJB.jpg"
              text='            Emerald Preset PC              Starting at $999'
              label='Basic'
              path='/emeraldpreset'
            />
          </ul>
          <ul className='cards__items'>
           <CardItem
              img src="https://i.imgur.com/ivZUoJB.jpg"
              text='            Emerald Preset PC              Starting at $999'
              label='Basic'
              path='/emeraldpreset'
            />
            <CardItem
              img src="https://i.imgur.com/ivZUoJB.jpg"
              text='            Emerald Preset PC              Starting at $999'
              label='Basic'
              path='/emeraldpreset'
            />
            <CardItem
              img src="https://i.imgur.com/ivZUoJB.jpg"
              text='            Emerald Preset PC              Starting at $999'
              label='Basic'
              path='/emeraldpreset'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default BasicCard;

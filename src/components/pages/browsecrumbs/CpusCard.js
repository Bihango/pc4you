import React from 'react';
import '../../Cards.css';
import CardItem from '../../CardItem';

function CpusCard() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
           <CardItem
              img src="https://i.imgur.com/S9b7i2K.png"
              text='          AMD Ryzen 5 3600                     Starting at $199'
              label='3600'
              path='/cpu3600'
            />
            <CardItem
              img src="https://i.imgur.com/akZalkL.png"
              text='           AMD Ryzen 5 5600x                   Starting at $269'
              label='5600x'
              path='/cpu5600x'
            />
            <CardItem
              img src="https://i.imgur.com/aqiUuUU.png"
              text='          AMD Ryzen 7 5800x                      Starting at $399'
              label='5800x'
              path='/cpu5800x'
            />
          </ul>
          
          
        </div>
      </div>
    </div>
  );
}

export default CpusCard;

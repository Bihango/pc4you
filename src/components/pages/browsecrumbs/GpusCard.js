import React from 'react';
import '../../Cards.css';
import CardItem from '../../CardItem';

function GpusCard() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
           <CardItem
              img src="https://multimedia.bbycastatic.ca/multimedia/products/500x500/154/15463/15463567.jpg"
              text='     Nvidia GeForce RTX 3080                 Starting at $1029'
              label='3080'
              path='/gpu3080'
            />
            <CardItem
              img src="https://multimedia.bbycastatic.ca/multimedia/products/500x500/159/15909/15909858_1.jpeg"
              text='    Gigabyte GeForce RTX 3070                Starting at $799'
              label='3070'
              path='/gpu3070'
            />
            <CardItem
              img src="https://m.media-amazon.com/images/I/819GRLqJX0L._AC_SY450_.jpg"
              text='    EVGA GeForce RTX 3060                    Starting at $589'
              label='3060'
              path='/gpu3060'
            />
          </ul>
          
          
        </div>
      </div>
    </div>
  );
}

export default GpusCard;

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
              img src="https://m.media-amazon.com/images/I/91vdX+ILksL._AC_SX425_.jpg"
              text=' ASUS ROG Maximus XIII Hero                 Starting at $329'
              label='asus'
              path='/masus'
            />
            <CardItem
              img src="https://m.media-amazon.com/images/I/61IWeLyA6oL._AC_SX425_.jpg"
              text='Gigabyte X570 AORUSMASTER             Starting at $299'
              label='giga'
              path='/mgiga'
            />
            <CardItem
              img src="https://m.media-amazon.com/images/I/918AAqjXe9L._AC_SX679_.jpg"
              text='       MSI B450 GAMING PRO                 Starting at $199'
              label='msi'
              path='/mmsi'
            />
          </ul>
          
          
        </div>
      </div>
    </div>
  );
}

export default CpusCard;

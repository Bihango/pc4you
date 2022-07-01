import React from 'react'
import '../App.css';
import{ Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container' style={{ 
        backgroundImage: `url("https://i.imgur.com/OfyrIA0.jpg")` 
      }}>
        <h1>Built For You</h1>
        <p><div className='her-btns'>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'> Start Building <i class="fa-solid fa-hammer"></i></Button>
        </div></p>
        
    </div>
    
  );
}

export default HeroSection
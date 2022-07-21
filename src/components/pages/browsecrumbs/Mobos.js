import React from 'react';
import '../Browse.css'
import { Link } from 'react-router-dom';

import MobosCard from './MobosCard';

export function Mobos() {
    return (
        <div>
        <div className='browse-container'>
        <h><Link to='/browse'>Browse</Link>  →  Motherboards</h>
          <div class='browse-links'>
            <div className='browse-link-wrapper'>

              <MobosCard/>
            
            </div>
          </div>  
        </div>
        </div>
      );
    }
    
    export default Mobos;
import React from 'react';
import '../Browse.css'
import { Link } from 'react-router-dom';

import BasicCard from './BasicCard';

export function Basic() {
    return (
        <div>
        <div className='browse-container'>
        <h><Link to='/browse'>Browse</Link>  →  Basic PCs</h>
          <div class='browse-links'>
            <div className='browse-link-wrapper'>

              <BasicCard/>
            
            </div>
          </div>  
        </div>
        </div>
      );
    }
    
    export default Basic;
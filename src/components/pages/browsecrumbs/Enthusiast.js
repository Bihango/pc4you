import React from 'react';
import '../Browse.css'
import { Link } from 'react-router-dom';

import EnthusiastCard from './EnthusiastCard';

export function Enthusiast() {
    return (
        <div>
        <div className='browse-container'>
        <h><Link to='/browse'>Browse</Link>  →  Enthusiast PCs</h>
          <div class='browse-links'>
            <div className='browse-link-wrapper'>

              <EnthusiastCard/>
            
            </div>
          </div>  
        </div>
        </div>
      );
    }
    
    export default Enthusiast;
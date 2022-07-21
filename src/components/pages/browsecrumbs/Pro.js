import React from 'react';
import '../Browse.css'
import { Link } from 'react-router-dom';

import ProCard from './ProCard';

export function Pro() {
    return (
        <div>
        <div className='browse-container'>
        <h><Link to='/browse'>Browse</Link>  →  Pro PCs</h>
          <div class='browse-links'>
            <div className='browse-link-wrapper'>

              <ProCard/>
            
            </div>
          </div>  
        </div>
        </div>
      );
    }
    
    export default Pro;
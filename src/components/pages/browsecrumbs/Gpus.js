import React from 'react';
import '../Browse.css'
import { Link } from 'react-router-dom';

import GpusCard from './GpusCard';

export function Gpus() {
    return (
        <div>
        <div className='browse-container'>
        <h><Link to='/browse'>Browse</Link>  →  GPUs</h>
          <div class='browse-links'>
            <div className='browse-link-wrapper'>

              <GpusCard/>
            
            </div>
          </div>  
        </div>
        </div>
      );
    }
    
    export default Gpus;
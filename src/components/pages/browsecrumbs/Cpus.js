import React from 'react';
import '../Browse.css'
import { Link } from 'react-router-dom';

import CpusCard from './CpusCard';

export function Cpus() {
    return (
        <div>
        <div className='browse-container'>
        <h><Link to='/browse'>Browse</Link>  →  CPUs</h>
          <div class='browse-links'>
            <div className='browse-link-wrapper'>

              <CpusCard/>
            
            </div>
          </div>  
        </div>
        </div>
      );
    }
    
    export default Cpus;
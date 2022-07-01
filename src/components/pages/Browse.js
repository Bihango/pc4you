import React from 'react';
import './Browse.css'
import { Link } from 'react-router-dom';

export function Browse() {
    return (
        <div> 
        <div className='browse-container'>
        <h>Browse →</h>
          <div class='browse-links'>
            <div className='browse-link-wrapper'>

            <div className='browse-link-wrapper'>
              <div class='browse-link-items'>
              <h1>Prebuilts</h1>
                <h2><h6><br></br></h6>
                <Link to='/cpus'>Enthusiast PCs</Link><br></br>
                <Link to='/cpus'>Basic PCs</Link><br></br>
                <Link to='/cpus'>Pro PCs</Link><br></br>
                <Link to='/cpus'>Mini PCs</Link>
                </h2>
              </div>
              
              <div class='browse-link-items'>
                <h1>Peripherals</h1>
                <h2><h6><br></br></h6>
                <Link to='/cpus'>Monitors</Link><br></br>
                <Link to='/cpus'>Keyboards</Link><br></br>
                <Link to='/cpus'>Headsets</Link><br></br>
                <Link to='/cpus'>Mice</Link><br></br>
                </h2>
              </div>
            </div>

            <div class='browse-link-items'>
                <h1>Components</h1>
                <h2><h6><br></br></h6>
                <Link to='/cpus'>CPUs</Link><br></br>
                <Link to='/cpus'>Mobos</Link><br></br>
                <Link to='/cpus'>GPUs</Link><br></br>
                <Link to='/cpus'>PSUs</Link><br></br>
                <Link to='/cpus'>Cooling</Link><br></br>
                <Link to='/cpus'>Storage</Link>
                </h2>
              </div>
            
            </div>
          </div>  
          
        </div>
        
        <h7>note: only CPU breadcrumbs work right now</h7>
        </div>
        
      );
    }
    
    export default Browse;
    
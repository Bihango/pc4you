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
                <Link to='/enthusiast'>Enthusiast PCs</Link><br></br>
                <Link to='/basic'>Basic PCs</Link><br></br>
                <Link to='/pro'>Pro PCs</Link><br></br>
                </h2>
              </div>
              
              <div class='browse-link-items'>
              <h1>Components</h1>
                <h2><h6><br></br></h6>
                <Link to='/cpus'>CPUs</Link><br></br>
                <Link to='/gpus'>GPUs</Link><br></br>
                <Link to='/mobos'>Mobos</Link><br></br>
                </h2>
              </div>
            </div>

            
            </div>
          </div>  
        </div>
        </div>
        
      );
    }
    
    export default Browse;
    
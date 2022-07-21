import React from 'react';
import '../Browse.css'
import { Link } from 'react-router-dom';

export function Cpus() {
    return (
        <div>
        <div className='browse-container'>
        <h>Browse → <Link to='/browse'>Components</Link> → CPUs</h>
          <div class='browse-links'>
            <div className='browse-link-wrapper'>

            <div className='browse-link-wrapper'>
              <div class='browse-link-items'>
              <h1>AMD CPUs</h1>
                <h2><h6><br></br></h6>
                <Link to='/cpu3700x'>3600</Link><br></br>
                <Link to='/cpu3700x'>3600x</Link><br></br>
                <Link to='/cpu3700x'>3700</Link><br></br>
                <Link to='/cpu3700x'>3700x</Link>
                </h2>
              </div>
              
              <div class='browse-link-items'>
                <h1>Intel CPUs</h1>
                <h2><h6><br></br></h6>
                <Link to='/cpu3700x'>i7 10700F</Link><br></br>
                <Link to='/cpu3700x'>i7 10700KF</Link><br></br>
                <Link to='/cpu3700x'>i9 9900K</Link><br></br>
                <Link to='/cpu3700x'>i9 9900KF</Link><br></br>
                </h2>
              </div>
            </div>
            
            </div>
          </div>  
        </div>
        </div>
      );
    }
    
    export default Cpus;
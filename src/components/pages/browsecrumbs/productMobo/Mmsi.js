import React from 'react';
import '../../Browse.css'
import '../../../../App.css'
import { Link } from 'react-router-dom';
import Products from '../../Products';
import { productDataMmsi } from '../../Products/data';


export function GpuMmsi() {
    return (

        <div>
        <div className='browse-container'>
        <h><Link to='/browse'>Browse</Link>  → <Link to='/mobos'> Motherboards</Link> → MSI B450 GAMING PRO Carbon Max</h>
          <div class='browse-links'>
            <div className='browse-link-wrapper'>
            <Products heading='' data={productDataMmsi  } />
            
            </div>
          </div>  
        </div>
        </div>
      );
    }
    
    export default GpuMmsi;


//<img class ="info" src="https://i.imgur.com/78V6M1K.jpg" />

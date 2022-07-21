import React from 'react';
import '../../Browse.css'
import '../../../../App.css'
import { Link } from 'react-router-dom';
import Products from '../../Products';
import { productDataMgiga } from '../../Products/data';


export function GpuMgiga() {
    return (

        <div>
        <div className='browse-container'>
        <h><Link to='/browse'>Browse</Link>  → <Link to='/mobos'> Motherboards</Link> → Gigabyte X570 AORUSMASTER</h>
          <div class='browse-links'>
            <div className='browse-link-wrapper'>
            <Products heading='' data={productDataMgiga  } />
            
            </div>
          </div>  
        </div>
        </div>
      );
    }
    
    export default GpuMgiga;


//<img class ="info" src="https://i.imgur.com/78V6M1K.jpg" />

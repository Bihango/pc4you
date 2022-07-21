import React from 'react';
import '../../Browse.css'
import '../../../../App.css'
import { Link } from 'react-router-dom';
import Products from '../../Products';
import { productDataMasus } from '../../Products/data';


export function GpuMasus() {
    return (

        <div>
        <div className='browse-container'>
        <h><Link to='/browse'>Browse</Link>  → <Link to='/mobos'> Motherboards</Link> → ASUS ROG Maximus XIII Hero </h>
          <div class='browse-links'>
            <div className='browse-link-wrapper'>
            <Products heading='' data={productDataMasus  } />
            
            </div>
          </div>  
        </div>
        </div>
      );
    }
    
    export default GpuMasus;


//<img class ="info" src="https://i.imgur.com/78V6M1K.jpg" />

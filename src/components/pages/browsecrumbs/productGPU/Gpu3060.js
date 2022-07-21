import React from 'react';
import '../../Browse.css'
import '../../../../App.css'
import { Link } from 'react-router-dom';
import Products from '../../Products';
import { productData3060 } from '../../Products/data';


export function Gpu3060() {
    return (

        <div>
        <div className='browse-container'>
        <h><Link to='/browse'>Browse</Link>  → <Link to='/gpus'> GPUs</Link> → EVGA GeForce RTX 3060</h>
          <div class='browse-links'>
            <div className='browse-link-wrapper'>
            <Products heading='' data={productData3060  } />
            
            </div>
          </div>  
        </div>
        </div>
      );
    }
    
    export default Gpu3060;


//<img class ="info" src="https://i.imgur.com/78V6M1K.jpg" />

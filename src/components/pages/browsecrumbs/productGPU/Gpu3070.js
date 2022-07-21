import React from 'react';
import '../../Browse.css'
import '../../../../App.css'
import { Link } from 'react-router-dom';
import Products from '../../Products';
import { productData3070 } from '../../Products/data';


export function Gpu3070() {
    return (

        <div>
        <div className='browse-container'>
        <h><Link to='/browse'>Browse</Link>  → <Link to='/gpus'> GPUs</Link> → Gigabyte GeForce RTX 3070</h>
          <div class='browse-links'>
            <div className='browse-link-wrapper'>
            <Products heading='' data={productData3070  } />
            
            </div>
          </div>  
        </div>
        </div>
      );
    }
    
    export default Gpu3070;


//<img class ="info" src="https://i.imgur.com/78V6M1K.jpg" />

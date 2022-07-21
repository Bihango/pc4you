import React from 'react';
import '../../Browse.css'
import '../../../../App.css'
import { Link } from 'react-router-dom';
import Products from '../../Products';
import { productData3080 } from '../../Products/data';


export function Gpu3080() {
    return (

        <div>
        <div className='browse-container'>
        <h><Link to='/browse'>Browse</Link>  → <Link to='/gpus'> GPUs</Link> → Nvidia GeForce RTX 3080 </h>
          <div class='browse-links'>
            <div className='browse-link-wrapper'>
            <Products heading='' data={productData3080  } />
            
            </div>
          </div>  
        </div>
        </div>
      );
    }
    
    export default Gpu3080;


//<img class ="info" src="https://i.imgur.com/78V6M1K.jpg" />

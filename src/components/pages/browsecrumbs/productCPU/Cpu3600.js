import React from 'react';
import '../../Browse.css'
import '../../../../App.css'
import { Link } from 'react-router-dom';
import Products from '../../Products';
import { productData3600 } from '../../Products/data';


export function Cpu3600() {
    return (

        <div>
        <div className='browse-container'>
        <h><Link to='/browse'>Browse</Link>  → <Link to='/cpus'> CPUs</Link> → AMD Ryzen 5 3600</h>
          <div class='browse-links'>
            <div className='browse-link-wrapper'>
            <Products heading='' data={productData3600  } />
            
            </div>
          </div>  
        </div>
        </div>
      );
    }
    
    export default Cpu3600;


//<img class ="info" src="https://i.imgur.com/78V6M1K.jpg" />

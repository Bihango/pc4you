import React from 'react';
import '../../Browse.css'
import '../../../../App.css'
import { Link } from 'react-router-dom';
import Products from '../../Products';
import { productData5600x } from '../../Products/data';


export function Cpu5600x() {
    return (

        <div>
        <div className='browse-container'>
        <h><Link to='/browse'>Browse</Link>  → <Link to='/cpus'> CPUs</Link> → AMD Ryzen 5 5600x</h>
          <div class='browse-links'>
            <div className='browse-link-wrapper'>
            <Products heading='' data={productData5600x  } />
            
            </div>
          </div>  
        </div>
        </div>
      );
    }
    
    export default Cpu5600x;


//<img class ="info" src="https://i.imgur.com/78V6M1K.jpg" />

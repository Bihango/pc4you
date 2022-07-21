import React from 'react';
import '../../Browse.css'
import '../../../../App.css'
import { Link } from 'react-router-dom';
import Products from '../../Products';
import { productData5800x } from '../../Products/data';


export function Cpu5800x() {
    return (

        <div>
        <div className='browse-container'>
        <h><Link to='/browse'>Browse</Link>  → <Link to='/cpus'> CPUs</Link> → AMD Ryzen 7 5800x</h>
          <div class='browse-links'>
            <div className='browse-link-wrapper'>
            <Products heading='' data={productData5800x  } />
            
            </div>
          </div>  
        </div>
        </div>
      );
    }
    
    export default Cpu5800x;


//<img class ="info" src="https://i.imgur.com/78V6M1K.jpg" />

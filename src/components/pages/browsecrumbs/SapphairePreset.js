import React from 'react';
import '../Browse.css'
import '../../../App.css'
import { Link } from 'react-router-dom';
import Products from '../Products';
import { productDataSapphaire } from '../Products/data';


export function Enthusiast() {
    return (

        <div>
        <div className='browse-container'>
        <h><Link to='/browse'>Browse</Link>  → <Link to='/pro'> Pro PCs</Link> → Sapphaire Preset PC</h>
          <div class='browse-links'>
            <div className='browse-link-wrapper'>
            <Products heading='' data={productDataSapphaire } />
            
            </div>
          </div>  
        </div>
        </div>
      );
    }
    
    export default Enthusiast;


//<img class ="info" src="https://i.imgur.com/78V6M1K.jpg" />

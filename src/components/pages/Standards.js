import React from 'react';
import Products from './Products';
import { productData, productDataTwo } from './Products/data';
import { BrowserRouter as Router } from 'react-router-dom';
import '../../App.css'

export default function Standards() {
    return (
        <>
            <Products heading='Select Your Standard' data={productDataTwo} />
        </>
    );
}
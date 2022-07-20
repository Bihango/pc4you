import React from 'react';
import Products from './Products';
import { productData, productDataTwo,productDataThree } from './Products/data';
import { BrowserRouter as Router } from 'react-router-dom';
import '../../App.css'

export default function Reccomendations() {
    return (
        <>
            <Products heading='The Perfect Desktops For You' data={productDataThree} />
        </>
    );
}
import React from 'react';
import Products from './Products';
import { productDataThree } from './Products/data';
import '../../App.css'

export default function Reccomendations() {
    return (
        <>
            <Products heading='The Perfect Desktops For You' data={productDataThree} />
        </>
    );
}
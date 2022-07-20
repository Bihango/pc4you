//fix the github pages glitch
import React, {useState} from 'react';
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards';

function Homepage(){
    return(
        <>
            <HeroSection/>
            <Cards/>
        </>
    )
}

export default Homepage;
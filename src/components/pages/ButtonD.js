import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = (props) => {
    const checkButtonStyle = STYLES.includes(props.buttonStyle) 
    ? props.buttonStyle 
    : STYLES[0]

    const checkButtonSize = SIZES.includes(props.buttonSize)
    ? props.buttonSize
    : SIZES[0]

    function handleClick(){
        console.log(props.link)
    }
    
    return(
        <Link to={props.link} className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick= {handleClick}
            >
                {props.text}
            </button>
        </Link>
    )
};
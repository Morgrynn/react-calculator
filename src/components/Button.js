import React from 'react';
import './button.css';

const isOperator = val => {
    return !isNaN(val) || val === "," || val === "=";
}


export const Button = props => (
    <div 
        className={`button-row ${
            isOperator(props.children) ? null : "button-operator"
        }`}
        onClick={() => props.handleClick(props.children)}
    >
        {props.children}
    </div>
);



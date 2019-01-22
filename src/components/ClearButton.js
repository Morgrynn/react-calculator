import React from 'react';
import './clearButton.css';

export const ClearButton = (props) => (
    <div className="clear-btn" onClick={props.clearScreen}>
        {props.children}
    </div>
)
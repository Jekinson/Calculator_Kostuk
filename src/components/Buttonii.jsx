import React from 'react';
import './Buttonii.css';

const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
}

export const Buttonii = props => (
    <div className={`btn-wrapper ${
        isOperator(props.children) ? null : "operator"
    }`}
    onClick={() => props.handleClick(props.children)}>
        {props.children}
    </div>
)

export default Buttonii;
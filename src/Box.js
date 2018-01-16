import React from 'react';
import './Box.css';

const Box = ({color}) => {
    const bgColor = {
        backgroundColor: color
    };
    
    return (<div style={bgColor} className="box"></div>);
};

export default Box;
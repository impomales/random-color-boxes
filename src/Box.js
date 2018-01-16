import React from 'react';
import './Box.css';

const Box = (props) => {
    const bgColor = {
        backgroundColor: props.color
    };
    
    return (<div style={bgColor} className="box"></div>);
};

export default Box;
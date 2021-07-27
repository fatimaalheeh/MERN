import React from 'react';

const ColoredWordComponent = props => {
    if(isNaN(+props.word)){return (
        <p style={{color:props.color,backgroundColor:props.backgroundColor}}>You are looking at   {props.word}</p>
    )}
    else
    { 
        <p>{props.word} is not a number</p>
    }
}
export default ColoredWordComponent;    
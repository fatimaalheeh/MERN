import React from 'react';

const ColoredWordComponent = props => {
    return (
        <p style={{color:props.color,backgroundColor:props.backgroundColor}}>You are looking at   {props.word}</p>
    )
}
export default ColoredWordComponent;
import React from 'react';
const WordComponent = props => {
    if(isNaN(+props.word))
    {return (
        <p>You requested this word :     {props.word}</p>
    )}
    else
    {
        return (
            <p>{props.word} is not a word.</p>
        )
    }
}
export default WordComponent;
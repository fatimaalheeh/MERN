import React from 'react';
import styles from './Box.module.css';


const ShowBox = (props) => {
    const {allBoxes, setAllBoxes} = props;//passing values
    
    return (
        <div className = {styles.container}>
            {
            allBoxes.map((newBox, idx ) =>{
                // return <button onClick={ (e) => onClickHandler(e, item) }>{ item }</button>

                return <div  className= {styles.box} style = {{backgroundColor: newBox.boxColor  ,width: newBox.boxWidth+"px"  ,height:newBox.boxHeight+"px"  }}>
                </div>
            })}
        </div>
    );
};


export default ShowBox;
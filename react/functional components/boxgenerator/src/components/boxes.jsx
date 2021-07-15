import React from 'react';
import styles from './Box.module.css';


const ShowBox = (props) => {
    const {allBoxes, setAllBoxes} = props;
    return (
        <div className = {styles.container}>
            {allBoxes.map((newBox, idx ) =>{
                // return <button onClick={ (e) => onClickHandler(e, item) }>{ item }</button>

                return <div  className= {styles.box} style = {{backgroundColor: newBox.boxColor  }}>
                  
                </div>
            })}
        </div>
    );
};


export default ShowBox;
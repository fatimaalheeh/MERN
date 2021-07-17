import React , {useState} from 'react';
import styles from './Box.module.css';


const Generator = (props) => {
   
    const {submitHandler, changeHandler, formInfo} = props //for passing




    return (
        
        <div>
             <form onSubmit = {submitHandler} className = "">
                <div className="form-group">
                    <label htmlFor="">Color </label>    
                    <input className="form-control" type="text" name="boxColor" id="" onChange= {changeHandler} value = {formInfo.boxColor}/>
                    <label htmlFor="">Height </label>
                    <input className="form-control" type="text" name="boxHeight" id="" onChange= {changeHandler} value = {formInfo.boxHeight}/>
                    <label htmlFor="">Width </label>
                    <input className="form-control" type="text" name="boxWidth" id="" onChange= {changeHandler} value = {formInfo.boxWidth}/>
                </div>
               <span> . </span>
                <button type="submit" className=""> Add</button>

            </form>
        </div>
        
        
    );
};


export default Generator;
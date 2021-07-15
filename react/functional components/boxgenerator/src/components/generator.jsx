import React , {useState} from 'react';
import styles from './Box.module.css';


const Generator = (props) => {
   
    const {submitHandler, changeHandler, formInfo} = props




    return (
        
        <div>
             <form onSubmit = {submitHandler} className = "col-6 mx-auto">
                <div className="form-group">
                    <label htmlFor="">Color </label>
                    <input className="form-control" type="text" name="boxColor" id="" onChange= {changeHandler} value = {formInfo.boxColor}/>
                </div>
               <span> . </span>
                <button type="submit" className="btn btn-success"> Add</button>

            </form>
        </div>
        
        
    );
};


export default Generator;
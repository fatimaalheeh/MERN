import userEvent from '@testing-library/user-event';
import React from 'react';
import { useState } from 'react';
const UserForm = () => {
    // const {blah,setBlah} = props;
    const[firstName,setFirstName] = useState("");
    const[lastName,setLastName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[confirmPasswd,setConfirmPasswd] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");
    const [confError, setPassconfError] = useState("");

    
    const handleFirstName = (e) => {
        setFirstName(e.target.value) ;
        if(e.target.value.length < 1) {
            setFirstNameError("First Name must not be blank");
        }
        else if (e.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 characters long");  
        }
        else if(e.target.value.length >= 2) {
            setFirstNameError("");
        }
    }
    const handleLastName =(e)=>{
        setLastName(e.target.value);
        if(e.target.value.length <1){
            setLastNameError("Last Name must not be blank");        
        } 
        else if (e.target.value.length<2){
            setLastNameError("Last Name must be at least 2 characters long");
        } else if (e.target.value.length>=2){
            setLastNameError("");
        }
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value);
        if(e.target.value.length<1){
            setEmailError("Email Name must not be blank");            
        } else if (e.target.value.length<2){
            setEmailError("Email must be at least 2 characters long");
        } else if (e.target.value.length>=2){
            setEmailError("");
        }
    }
    const handlePass = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPassError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPassError("Password must be 8 characters or longer!");
        }
        else if(e.target.value.length >= 8) {
            setPassError("");
        }
    }
    const handleConfirm = (e) => {
        setConfirmPasswd(e.target.value);
        if(e.target.value.length < 1) {
            setPassconfError("pass is required!"); 
        }
        else if(e.target.value.length < 8) {
            setPassconfError("pass must be 8 characters or longer!");
        }
        if 
        (e.target.confirmPasswd === e.target.password) {
                setPassconfError("give me error");
            
        
    }
    }
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName,lastName, email, password,confirmPasswd };
        console.log("Welcome", newUser);
    };
    
    return(
        <form onSubmit={ createUser }>
            <label htmlFor="firstName">First Name:</label>
            <div>
                <input type="text" onChange={handleFirstName} name="firstName" />
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label htmlFor="lastName" >Last Name: </label> 
                <input type="text" onChange={ handleLastName } name="lastName"/>
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                }
            </div> 
            <div>
                <label htmlFor="email">Email Address: </label> 
                <input type="email" onChange={handleEmail} name="email"/>
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" onChange={handlePass } name="password"/>
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ passError }</p> :
                    ''
                }
            </div>
            <div>
                <label htmlFor="confirmPasswd">Confirm Password: </label>
                <input type="password" onChange={handleConfirm} name="confirmPasswd"/>
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ confError }</p> :
                    ''
                }
                <input type="submit" value="Create User" />
            </div> 
        </form>
    );
}

export default UserForm;
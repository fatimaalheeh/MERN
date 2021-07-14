import React, { useState } from  'react';
    

const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confpassword, setconfPassword] = useState("");  
    const [firstNameError, setfirstNameError] = useState("");
    const [lastNameError, setlastNameError] = useState("");
    const [emailError, setemailError] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [confirmpasswordError, setconfirmpasswordError] = useState("");
    
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, email, password };
        console.log("Welcome", newUser);
    };
    // first name validation
    const handlefristName = (e) => {
        setfirstName(e.target.value);
        if(e.target.value.length < 1) {
            setfirstNameError("First Name is required!");
        } else if(e.target.value.length < 2) {
            setfirstNameError("First Name must be 3 characters or longer!");
        }
        else if(e.target.value.length >= 2) {
            setfirstNameError("");
        }
    }
    // last name validation
    const handlelastName = (e) => {
        setlastName(e.target.value);
        if(e.target.value.length < 1) {
            setlastNameError("Last Name is required!");
        } else if(e.target.value.length < 2) {
            setlastNameError("Last Name must be 2 characters or longer!");
        }
        else if(e.target.value.length >= 2) {
            setlastNameError("");
        }
    }
    // email validation
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setemailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setemailError("Email must be 5 characters or longer!");
        }
        else if(e.target.value.length >= 5) {
            setemailError("");
        }
    }
    //password validation
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setpasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setpasswordError("Password must be 8 characters or longer!");
        }
        else if(e.target.value.length >= 8) {
            setpasswordError("");
        }
    }
    //password confirm validation
    const handleConfirmPassword = (e) => {
                setconfPassword(e.target.value);
        if(e.target.value.length < 1) {
            setconfirmpasswordError("this field is required!");
            
        }
        
        else if(e.target.value.length < 8) {
            setconfirmpasswordError("this field must be 8 characters or longer!");
        }
        
        
        else {
            // setconfirmpasswordError("good length");
            if (e.target.confpassword === e.target.password) {
            
                setconfirmpasswordError("match.");
            }
        }
        
    }
    
    return(
    <div>
        <form onSubmit={ createUser }>
            <div>
                <label>firstName: </label> 
                <input name="firstName" type="text" onChange={handlefristName} />

    {
        firstNameError ?
        <p style={{color:'crimson'}}>{ firstNameError }</p> :''
        
    }

                
            </div>
            <div>
                <label>lastName: </label> 
                <input name="lastName" type="text" onChange={handlelastName} />
                    {
                        lastNameError ?
                        <p style={{color:'crimson'}}>{ lastNameError }</p> :''
                    }
            </div>
            <div>
                <label>Email Address: </label> 
                <input name="email" type="text" onChange={handleEmail } />
                {
                        emailError ?
                        <p style={{color:'crimson'}}>{ emailError }</p> :''
                    }
            </div>
            <div>
                <label>Password: </label>
                <input name="password" type="text" onChange={handlePassword } />
                {
                        passwordError ?
                        <p style={{color:'crimson'}}>{ passwordError }</p> :''
                }
                
            </div>
            <div>
                <label>confirm Password: </label>
                <input name="confpassword" type="text" onChange={handleConfirmPassword } />
                {
                        confirmpasswordError ?
                        <p style={{color:'crimson'}}>{ confirmpasswordError }</p> :''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
        </div>
    );
};
    
export default UserForm;
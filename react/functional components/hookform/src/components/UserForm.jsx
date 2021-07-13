import React, { useState } from  'react';
    

const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confpassword, setconfPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, email, password };
        console.log("Welcome", newUser);
    };
    
    return(
    <div>
        <form onSubmit={ createUser }>
            <div>
                <label>firstName: </label> 
                <input type="text" onChange={ (e) => setfirstName(e.target.value) } />
            </div>
            <div>
                <label>lastName: </label> 
                <input type="text" onChange={ (e) => setlastName(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>confirm Password: </label>
                <input type="text" onChange={ (e) => setconfPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        <div>
        <h4>first Name: {firstName}-----</h4>
        <h4>last Name: {lastName}-----</h4>
        <h4>Email: {email}-----</h4>
        <h4>Password: {password}-----</h4>
        <h4>Confirm Password: {confpassword}</h4>
        </div>
        

        </div>
    );
};
    
export default UserForm;
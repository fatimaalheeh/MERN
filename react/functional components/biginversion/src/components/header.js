import React from 'react';
// import React from 'reactr'
const Header = props => {

    return(

                <div>
                    <h1>{ props.lastName }, { props.firstName}</h1>
                    <p>Age: {props.age}</p>
                    <p>Hair Color: {props.hairColor}</p>
                </div>


    
    );
}
    
export default Header;
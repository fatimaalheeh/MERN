import React, { Component } from 'react';


class Header extends React.Component {
        render() {
            const { firstName, lastName, age, hairColor } = this.props;
            return (
                <div>
                    <h1>{ lastName }, { firstName}</h1>
                    <p>Age: {age}</p>
                    <p>Hair Color: {hairColor}</p>
                </div>
            );
        }
    }
    
export default Header;
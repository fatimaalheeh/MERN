import React, { Component } from 'react';


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            age: 22
        };
    }
    increaseAge = () => {
        
        this.setState({ age: this.state.age+1 });
    
    }    
 
    render() {
            const { firstName, lastName, hairColor } = this.props;
        
            return (
                <div>
                    <h1>{ lastName }, { firstName}</h1>
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {hairColor}</p>

                        <button onClick={this.increaseAge}>Birthday Button for {firstName} {lastName}</button>


                </div>
            );
        }
    }
    
export default Header;
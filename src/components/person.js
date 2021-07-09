import React, { Component } from 'react';
    
    
class Person extends Component{
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.user.age,
        }
    }
    addOne = () => {
        this.setState({
            age: this.state.age + 1,
        })
    }

    render(){
        console.log(this.props);
        return(
            <div> 
                <div className="name">{this.props.user.lastName},{this.props.user.firstName}</div>
                <div className="age" onClick={this.props.cb}>
                    Age: { this.state.age }
                </div>
                <div className="hairColor"> Hair Color: {this.props.user.hair} </div>
                <div className="birthday"> 
                    <button onClick= {this.addOne}>Birthday</button> 
                </div>
            </div>
        );
    }
}
    
export default Person;
import React, { Component } from 'react';

class Form extends Component {

    constructor(props){
        super(props);//to use 'this' and access parent properties
    }

    this.initialState = {
        name: '';
        city: '';
    };

    render(){
        return(
            <div className="card">
                <h5 className="card-header">Add User</h5>
                <div className="card-body">
                    <form>
                        <input type = "text" name = "text" placeholder = "Enter name" className = "form-control" value = {this.state.name} onChange={this.handleChange} />

                    </form>
                </div>
            </div>

        )
    }
}

export default Form;
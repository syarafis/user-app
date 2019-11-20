import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    name: 'Kesava Raman',
                    city: 'Kuala Lumpur'
                },
                {
                    name: 'Aina Azmi',
                    city: 'Petaling Jaya'
                },
                {
                    name: 'Arun Arichandran',
                    city: 'Damansara'
                },
                {
                    name: 'Debra Pauh',
                    city: 'Penang'
                },
                {
                    name: 'Paul Kam',
                    city: 'Perak'
                },
            ],
        };
    }

    removeUser = (index) => {
        const users = this.state.users;
        //Remove | Change the state
        this.setState({
            users: users.filter((user, i) => {
                return (i !== index);
            })
        });
    }

    


    render() {
        return (
            <div className="container mt-4">
                <h4>React UserApp</h4>
                <Table usersDetails={this.state.users} delUser={this.removeUser} />
            </div>
        );
    }
}

export default App;
import React, { Component } from 'react';

//Functional Component 
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>City</th>
                <th>Action</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    //Declarative code
    const rows = props.usersDetails.map((user, index) => {
        return (
            <tr key={index}>
                <td>{user.name}</td>
                <td>{user.city}</td>
                <td>
                    <button className="btn btn-sm btn-danger" onClick={() => props.removeUser(index)}>
                        Delete
                    </button>
                </td>
            </tr >
        );
    });
    //console.log(rows);
    return (
        <tbody>{rows}</tbody>
    );
}


class Table extends Component {
    render() {
        return (
            <table className="table table-striped table-dark mt-3">
                <TableHeader />
                <TableBody usersDetails={this.props.usersDetails} removeUser={this.props.delUser} />
            </table>
        );
    }
}
export default Table;
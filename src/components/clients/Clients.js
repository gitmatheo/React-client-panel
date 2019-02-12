import React, { Component } from "react";
import { Link } from "react-router-dom";

class Clients extends Component {
  state = {};
  render() {
    const clients = [
      {
        id: "313123331",
        firstName: "Kevin",
        lastName: "Johnson",
        email: "kevin@gmail.com",
        phone: "555-555-555",
        balance: "30"
      },
      {
        id: "3131dasd31",
        firstName: "Bob",
        lastName: "Jackson",
        email: "bjackson@gmail.com",
        phone: "325-535-355",
        balance: "110"
      }
    ];

    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                <i className=" fas fa-users" />
                Clients
              </h2>
            </div>
            <div className="col-md-4" />
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>${parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`client/${client.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" />
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>Loading..</h1>;
    }
  }
}

export default Clients;

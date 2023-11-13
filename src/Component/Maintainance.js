import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';

export default function Maintainance(){

  const [stakeHolders, setStakeHolders] = useState([]);

  useEffect(() => {
      loadStakeHolders();
  },[]);

  const loadStakeHolders =async () => {
    const result = await axios.get("http://localhost:9090/api/v1/stakeholders");
    setStakeHolders(result.data);
  };


  return (
    <div className="cbr2">
      <h2 className="text-center text-primary">List Of Stakeholders</h2>
      <Link className="btn btn-primary mx-2" to="/addstakeholder">Add Stakeholder</Link>
      <Table bordered  hover responsive striped >
        <thead className="table-primary">
         
            <th>Stakeholder_id</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Stakeholder Type</th>
            <th>Contact</th>
            <th>Email</th>
            <th>User Name</th>
            <th>Password</th>
            <th>Set Activity</th>
        </thead>
        <tbody>
            {
                stakeHolders.map(
                  stakeholder =>
                    <tr key={stakeholder.stakeholder_id}>
                        <td>{stakeholder.stakeholder_id}</td>
                        <td>{stakeholder.first_name}</td>
                        <td>{stakeholder.middle_name}</td>
                        <td>{stakeholder.last_name}</td>
                        <td>{stakeholder.stakeholder_type}</td>
                        <td>{stakeholder.contact}</td>
                        <td>{stakeholder.email}</td>
                        <td>{stakeholder.user_name}</td>
                        <td>{stakeholder.password}</td>
                        <td >
                          <button className="btn btn-outline-primary my-2">View</button>
                          <button className="btn btn-outline-success  mx-2">Edit</button>
                          <button className="btn btn-outline-danger ">Delete</button>
                        </td>
                    </tr>
                )
            }
        </tbody>

      </Table>
    </div>
  )
}

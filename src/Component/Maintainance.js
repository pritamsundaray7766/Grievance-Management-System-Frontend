import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button,Card,CardBody,CardHeader,Col,Form, FormGroup, Input, Label, Row, Table } from 'reactstrap';

export default function Maintainance(){

  const [stakeHolders, setStakeHolders] = useState([]);
  const [editStakeholder, setEditStakeholder] = useState(null);

  useEffect(() => {
      loadStakeHolders();
  },[]);

  const loadStakeHolders =async () => {
    const result = await axios.get("http://localhost:9090/api/v1/stakeholders");
    setStakeHolders(result.data);
  };
  const deleteStackholder=(id)=>{
    axios.delete(`http://localhost:9090/api/v1/stakeholders/${id}`).then(
      (Response)=>{
        toast.success("Stackeholder Deleted");
        loadStakeHolders();
      },
      (error)=>{
        toast.error("Stackholder Not Deleted  !! Server Problem");
      }
    )
  };
  const handleEdit = (stakeholder) => {
    // Set the stakeholder data to be edited
    setEditStakeholder(stakeholder);
  };

  const handleUpdate = async () => {
    try {
      // Use axios.put to update the stakeholder data
      await axios.put(`http://localhost:9090/api/v1/stakeholders/${editStakeholder.stakeholder_id}`, editStakeholder);
      toast.success("Stakeholder Updated");
      // After successful update, reset the editStakeholder state to null
      setEditStakeholder(null);
      // Reload the stakeholder list
      loadStakeHolders();
    } catch (error) {
      toast.error("Stakeholder Not Updated !! Server Problem");
    }
  };

  // Function to handle input changes in the form
  const handleInputChange = (e) => {
    // Update the editStakeholder state with the new input values
    setEditStakeholder({
      ...editStakeholder,
      [e.target.name]: e.target.value,
    });
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
                         
                          <button className="btn btn-outline-success  mx-2" onClick={() => handleEdit(stakeholder)}>Edit</button>
                          <button className="btn btn-outline-danger " onClick={()=>{deleteStackholder(stakeholder.stakeholder_id)}}>Delete</button>
                        </td>
                    </tr>
                )
            }
        </tbody>

      </Table>
   {/* Display the form for editing */}
   {editStakeholder && (
        <div>
          <Row className='mt-4'>
           <Col sm={{size: 10, offset:1}} >
            <Card color='warning' inverse >
            <CardHeader>
              <h3 className="text-center ">Edit Stakeholder</h3>
            </CardHeader>
            <CardBody>
          {/* Render a form with input fields for editing */}
          <Form>
                <FormGroup>
                  <Label for='firstName'>First Name</Label>
                  <Input type={"text"}  placeholder='Enter here'
                  name="first_name"
                  value={editStakeholder.first_name} 
                  onChange={handleInputChange} 
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='middle_name'> Middle Name</Label>
                  <Input type='text' placeholder='Enter here'  
                  name="middle_name"
                  value={editStakeholder.middle_name}
                  onChange={handleInputChange}
                  />
                  </FormGroup>
            
                <FormGroup>
                  <Label for='last_name'>Last Name</Label>
                  <Input type='text'  placeholder='Enter here'  
                  name="last_name"
                  value={editStakeholder.last_name}
                  onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='stakeholder_type'>Stakeholder Type</Label>
                  <Input type='text' placeholder='Enter here'  
                  name="stakeholder_type"
                  value={editStakeholder.stakeholder_type}
                  onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='contact'>Contact Number</Label>
                  <Input type='number'  placeholder='Enter here'  
                  name="contact"
                  value={editStakeholder.contact}
                  onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='email'>Email ID</Label>
                  <Input type='email' placeholder='Enter here'  
                  name="email"
                   value={editStakeholder.email}
                   onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='user_name'>User Name</Label>
                  <Input type='text'  placeholder='Enter here'  
                  name="user_name"
                   value={editStakeholder.user_name}
                   onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='password'>Password</Label>
                  <Input type='password' placeholder='Enter here'  
                  name="password"
                   value={editStakeholder.password}
                   onChange={handleInputChange}
                  />
                </FormGroup>
           

            <Button type="button" onClick={handleUpdate}>Update</Button>
          </Form>
          </CardBody>
          </Card>
          </Col>
          </Row>
      
        </div>
      )}
    </div>
  );
}

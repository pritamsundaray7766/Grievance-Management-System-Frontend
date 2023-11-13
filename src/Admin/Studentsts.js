import React from 'react'
import { useEffect, useState } from 'react'
import ComplaintService from '../Services/ComplaintService'
import { Table } from 'reactstrap'
export default function Studentsts() {
    const[complaint, setComplaint] = useState([])

useEffect(() =>{
    ComplaintService.getAllComplaints().then((Response) =>{
        setComplaint(Response.data)
        console.log(Response.data);
    }).catch(error =>{
        console.log(error);
    })
}, [])
  return (
    <div className="cbr2">
    <h2 className="text-center text-primary">CHECK STATUS</h2>
    <Table bordered  hover responsive striped>
        <thead className="table-primary">
          <th >Complain Id</th>
          <th>Student Name</th>
          <th>Complain Name</th>
          <th>Complain Title</th>
          <th>Complain Attachment</th>
          <th>Status</th>
          <th>Date</th>
      </thead>
      <tbody>
          {
              complaint.map(
                  complaint =>
                  <tr key={complaint.complaint_id}>
                      <td>{complaint.complaint_id}</td>
                      <td></td>
                      <td hidden>{complaint.complaint_code}</td>
                      <td>{complaint.concern}</td>
                      <td>{complaint.complaint_name}</td>
                      <td>{complaint.attachment}</td>
                      <td>{complaint.status}</td>
                      <td>{complaint.timestamp}</td>
                  </tr>
              )
          }
      </tbody>

    </Table>
  </div>
  )
}

import React from 'react'
import { useEffect, useState } from 'react'
import ComplaintService from '../Services/ComplaintService'
import { Table } from 'reactstrap'
export default function FalseComplaint() {
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
    <h2 className="text-center">List Of False Complaints</h2>
    <Table bordered  hover responsive striped>
        <thead className="table-primary">
          <th>Complaint Id</th>
          <th hidden>Complaint Code</th>
          <th>Complaint Name</th>
          <th>Complaint Type</th>
          <th>Complaint Details</th>
          <th>Reject date</th>
          <th>Reason</th>
      </thead>
      <tbody>
          {
              complaint.map(
                  complaint =>
                  <tr key={complaint.complaint_id}>
                      <td>{complaint.complaint_id}</td>
                      <td hidden>{complaint.complaint_code}</td>
                      <td>{complaint.concern}</td>
                      <td>{complaint.complaint_name}</td>
                      <td>{complaint.complaint_details}</td>
                      <td hidden>{complaint.attachment}</td>
                      <td hidden>{complaint.status}</td>
                      <td hidden>{complaint.timestamp}</td>
                  </tr>
              )
          }
      </tbody>

    </Table>
  </div>
  )
}

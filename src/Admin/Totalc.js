import React from 'react'
import { useEffect, useState } from 'react'
import ComplaintService from '../Services/ComplaintService'
import { Table } from 'reactstrap'
export default function Totalc() {
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
      <h2 className="text-center text-primary">List Of Complaints</h2>
      <Table bordered  hover responsive striped>
        <thead className="table-primary">
            <th>Complaint Id</th>
            <th hidden>Complaint Code</th>
            <th>Complaint Title</th>
            <th>Complaint Name</th>
            <th>Complaint Details</th>
            <th>Attachment</th>
            <th>Status</th>
            <th>Timestamp</th>
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

import React from 'react'
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import {NavLink as ReactLink} from 'react-router-dom';
import {NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'
export default function send() {
  return (
    <>
    <div>
  <div>
    <Row className='mt-4'>
      <Col sm={{size: 6, offset:3}} >
        <Card color='dark' inverse>
          <CardHeader>
            <h3>Fill Information!!</h3>
          </CardHeader>
          <CardBody>
            <Form >
              <FormGroup>
                <Label for='comaplaint_name'>Complaint Title</Label>
                <Input type='text' placeholder='Enter here' id='comaplaint_name' />
              </FormGroup>
              <FormGroup >
              <Label for="File">Select Category </Label>
                <Input type="select">
                <option selected>Choose...</option>
                <option value="1">GENERAL MAINTANCE</option>
                <option value="2">ELECTICAL MAINTANCE</option>
                <option value="3">IT & NETWORK</option>
                <option value="4">ERP Assist</option>
                <option value="5">Womens Grievance</option>
                </Input>
              </FormGroup>
              
              <FormGroup row>
                <Label for="exampleFile" ></Label>
                  <Col >
                    <Input id="exampleFile" name="file" type="file"/>
                  </Col>
                </FormGroup>

                <FormGroup>
                <Label for='description'>Mail to send</Label>
                <Input type='email' placeholder='@gamil.com' id='description' />
              </FormGroup>

<FormGroup>
                <label for="complaint">Complaint Info</label>
                <div id="stc">
    <textarea rows="6" name="complaint" id="complaint" placeholder="Enter complain Details" ></textarea>
    </div>
    </FormGroup>
              <div className="text-center">
                <Button outline color='light' type='submit'>SEND</Button>
                <Button outline color='secondary'type='reset' className='ms-2' >Reset</Button>
                
              </div>
            </Form>
          </CardBody>

        </Card>
      </Col>

    </Row>
    
    <div className='back'>
    
    <NavLink active tag={ReactLink} to="/" ><i class="fa fa-home"></i></NavLink>
<br></br>
<br></br>

				
    <NavLink active tag={ReactLink} to="/maintain" ><i className="fas fa-bars"></i></NavLink>
                    
  </div>
  
    </div>
    </div>
    </>
  )
}

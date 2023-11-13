import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Container } from 'reactstrap'
export default function Profie() {
  return (
    <>



    <Container>
       <Card  className="text-center my-2" color="success" outline style={{width: '40rem'}}>
        <CardBody>
            <CardTitle tag="h5" >
              ABHIJIT BEHERA
             </CardTitle>
             <CardTitle tag="h3" className='text-warning'> 
              DEAN of UNIVERSITY
              </CardTitle>
              <CardText> quisquam totam laborum sunt! Voluptate sunt aut minima?</CardText>
              <CardSubtitle>example@example.com</CardSubtitle>
              <Button color='primary' outline>Contact</Button>
            
          </CardBody>
         </Card> 
    </Container>
   
    </>
    
  )
}
 
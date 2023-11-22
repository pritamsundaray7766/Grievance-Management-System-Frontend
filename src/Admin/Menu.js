import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
   <>
     {/* <Container> */}
         {/* <Card className='text-center my-2'>
            <CardBody>
               <h1 className='text-center my-2'>Welcome to Grievance Management System</h1>
            </CardBody>
         </Card>

         <Row >
            <Col md={2}>
              <ListGroup >
               <Link className='list-group-item list-group-item-action' tag="a" to='/Menu' action>
                  Home
               </Link>
               <Link className='list-group-item list-group-item-action' tag="a"  to='/status' action>
                  Check Status
               </Link>
               <Link className='list-group-item list-group-item-action' tag="a" to='/profile' action>
                  Profile
               </Link>
               <Link className='list-group-item list-group-item-action' tag="a" to='/complaints' action>
                Complaint
               </Link>
               <Link className='list-group-item list-group-item-action' tag="a" to='/maintainance' action>
                 Maintainance
               </Link>
               <Link className='list-group-item list-group-item-action' tag="a" to='/logout' action>
                 Logout
               </Link>
              </ListGroup>
            
            </Col>

            <Col md={10}>
            
            
            </Col>
         </Row> */}
         <div className="menu">
   <div className="wrapper">
         <input type="checkbox" id="btn" hidden/>
         <label for="btn" className="menu-btn">
         <i className="fas fa-bars"></i>
         <i className="fas fa-times"></i>
         </label>
         <nav id="sidebar">
            <div className="title">
               ADMIN
            </div>
            <ul className="list-items">
               <li><Link to="/"><p className="fas fa-home"></p>Home</Link></li>
               <li><Link to="/status"><p className="fas fa-sliders-h"></p>CheckStatus</Link></li>
               <li><Link to="/profile"><p className="fas fa-user"></p>Profile</Link></li>
               <li><Link to="/complaints"><p className="fas fa-stream"></p>Complains</Link></li>
               <li><Link to="/maintainance"><p className="fas fa-address-book"></p>Maintainance</Link></li>
               <li><Link to="/logout"><p className="fas fa-door-exit"></p>Logout</Link></li>
              
               <div className="icons">
                  <a href="#"><p className="fab fa-facebook-f"></p></a>
                  <a href="#"><p className="fab fa-twitter"></p></a>
                  <a href="#"><p className="fab fa-github"></p></a>
                  <a href="#"><p className="fab fa-youtube"></p></a>
               </div>
            </ul>
         </nav>
        </div> 
        <div className='cbr'>
        <div class='tube'>
         
         <h1>Centurion University Of Technology and Management</h1>
         </div>
       
         <div class='container'>
           <span class='text first-text'>Welcome To </span>
           <span class='text sec-text'>Grievance Management</span>
         </div>
         </div>
        
         </div>
          {/* </Container> */}
        </>
   
       
 
        

  )
}

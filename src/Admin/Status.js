import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import {NavLink as ReactLink} from 'react-router-dom';


import {NavItem, NavLink } from 'reactstrap'

export default function Status() {
  return (

  <>


<div className='status'>
<div className='status-menu'>
<Menu/>
</div>



     <div className="home-section">
     
       <nav>
         <div className="sidebar-button">
          
           <span className="dashboard">Complain Status</span>
         </div>
         <div className="search-box">
           <input type="text" placeholder="Search for Complain"/>
          
         </div>
         <div className="profile-details">
          
           <span className="admin_name">Abhijit Behera</span>
         
         </div>
       </nav>
   
       <div className="home-content">
         <div className="overview-boxes">
           <div className="box">
             <div className="right-side">
               <div className="box-topic">
               <NavLink active tag={ReactLink} to="/total" >Total Complains</NavLink> </div>
               <div className="number">48</div>
               <div className="indicator">
                 
               </div>
             </div>
            
           </div>
           <div className="box">
             <div className="right-side">
               <div className="box-topic">
               <NavLink active tag={ReactLink} to="/solved" >Solved Complains</NavLink> 
               </div>
               <div className="number">38</div>
               <div className="indicator">
               
                 
               </div>
             </div>
           
           </div>
           <div className="box">
             <div className="right-side">
               <div className="box-topic">
               
               <NavLink active tag={ReactLink} to="/pending" >Pending Complains</NavLink> 
               
               </div>
               <div className="number">5</div>
               <div className="indicator">
                
               </div>
             </div>
         
           </div>
           <div className="box">
             <div className="right-side">
                <div className="box-topic">
               
               <NavLink active tag={ReactLink} to="/falsecomplaint" >False Complains</NavLink> 
               
               </div>
               <div className="number">5</div>
               <div className="indicator">
               
               </div>
             </div>
          
           </div>
         </div>
   
         <div className="sales-boxes">
           <div className="recent-sales box">
             <div className="title">Recent Complains</div>
             <div className="sales-details">
               <ul className="details">
                 <li className="topic">Date</li>
                 <li><a href="#">02 Jan 2021</a></li>
                
               </ul>
               <ul className="details">
               <li className="topic">Student</li>
               <li><a href="#">Abhishek Mahanta</a></li>
               
             </ul>
             <ul className="details">
               <li className="topic">Complain</li>
               <li><a href="#">Plubming</a></li>
             </ul>
            
             </div>
             <div className="button">
               <Link to="/total">See All</Link>
             </div>
           </div></div>
           </div></div>
</div>
     </>
    
  )
}

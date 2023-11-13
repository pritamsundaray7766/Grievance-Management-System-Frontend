import React, { useState } from 'react'
import {NavLink as ReactLink} from 'react-router-dom';

import {  Collapse, Nav, Navbar, NavItem, NavLink } from 'reactstrap'


export default function Footer() {
  const [isOpen] = useState(false)
  return (

    // <div className="footer fixed-bottom ">
    //         <p className='text-center'>&copy;{new Date().getFullYear()} Centurion University of Technology and Management  | <a href='/disclaimer'>Disclaimer</a> | <a href="/privacypolicy">Privacy Policy</a> | <a href="/termsofuse">Terms of Use</a> | </p>
            
    //         <ul className='text-center d-inline-flex '>
    //             <li>
    //                 <a href="https://www.facebook.com/centurionuniversity/" target="_blank"><img className='social' src="https://img.icons8.com/material/24/null/facebook-circled--v1.png"/></a>
    //             </li>
    //             <li>
    //                 <a href="https://www.instagram.com/cutmodisha/" target="_blank"><img className='social' src="https://img.icons8.com/material-two-tone/24/000000/instagram-new.png"/></a>
    //             </li>
    //             <li>
    //                 <a href="https://twitter.com/CUTMIndia" target="_blank"><img className='social' src="https://img.icons8.com/material/24/null/twitter--v2.png"/></a>
    //             </li>
    //             <li>
    //                 <a href="https://www.youtube.com/channel/UCy2a2NdleGSGlEd5FxyOcOA" target="_blank"><img className='social' src="https://img.icons8.com/material/24/null/youtube-play--v1.png"/></a>
    //             </li>
    //         </ul>
            
    //     </div>
    <Navbar color='info' dark expand="md"  className='mt-4 ' fixed='bottom'>
    <Collapse isOpen={isOpen} navbar>   
    <Nav className="me-auto "  fill  card navbar >
      <NavItem>

    &copy;{new Date().getFullYear()} Centurion University of Technology and Management  | 
      </NavItem>
    
    <NavItem><NavLink active tag={ReactLink} to="/disclaimer" >Disclaimer |</NavLink> </NavItem>
    <NavItem><NavLink active tag={ReactLink} to="/privacypolicy" >Privacypolicy |</NavLink></NavItem>
    <NavItem><NavLink active tag={ReactLink} to="/termsofuse" >Terms of Use |</NavLink></NavItem>
    <NavItem>
        <NavLink a href="https://www.instagram.com/cutmodisha/" target="_blank"><img className='social' src="https://img.icons8.com/material-two-tone/24/000000/instagram-new.png " alt='logo not found '/></NavLink>
    </NavItem>
    <NavItem>
        <NavLink a href="https://twitter.com/CUTMIndia" target="_blank"><img className='social' src="https://img.icons8.com/material/24/null/twitter--v2.png" alt='logo not found '/></NavLink>
    </NavItem>
    <NavItem>
        <NavLink a href="https://www.youtube.com/channel/UCy2a2NdleGSGlEd5FxyOcOA" target="_blank"><img className='social' src="https://img.icons8.com/material/24/null/youtube-play--v1.png" alt='logo not found '/></NavLink>
    </NavItem>
    </Nav>

    </Collapse> 
    </Navbar>
        
  )
}

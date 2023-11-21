import React from 'react'
import {NavItem, NavLink } from 'reactstrap'
import {NavLink as ReactLink} from 'react-router-dom';
export default function Logout() {
  return (
    <div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
      <h3 class="animate-charcter"> Log-out Successfully</h3>
    </div>
  </div>
  <div className='logout'><NavLink active tag={ReactLink} to="/" ><b className="fas fa-sync fa-spin"></b></NavLink>
  
          </div>
</div>
  )
}

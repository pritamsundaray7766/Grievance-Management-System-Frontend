import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {NavLink as ReactLink} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

const CustomNavbar =()=> {
  const [isOpen,setIsOpen] = useState(false)

  
    const [user, setUser] = useState({});
  
    useEffect(() => {
      axios.get('http://localhost:9090/api/v1/users').then(response => {
        setUser(response.data);
      });
    }, []);
    
  
  return (
    
      <Navbar color='info'  expand="md">
       <NavbarBrand tag={ReactLink} to="/" color="text-warning">Home</NavbarBrand>
        <NavbarToggler onClick={()=>setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/Login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/Signup">SignUp</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/Complaint">
                Complaint
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem  tag={ReactLink} to="/Menu">  Admin</DropdownItem>
                <DropdownItem tag={ReactLink} to='/check'>Check Status</DropdownItem>
                <DropdownItem tag={ReactLink} to='/snav'>Stakeholder</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText> Welcome {user.first_name}</NavbarText>
        </Collapse>
      </Navbar>
    
  );
}


export default CustomNavbar;
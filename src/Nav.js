import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavHead(){
    return(
       <div id="navContainer">
            
         <Navbar id="navHeading">
    
            <Navbar.Brand id="navBrand">E-Cart</Navbar.Brand>
             <Nav>
               <Nav.Link className="gender" href="#action1">Men</Nav.Link>
               <Nav.Link  className="gender" href="#action2">Women</Nav.Link>
               <Nav.Link  className="gender" href="#action3">Kids</Nav.Link>
            
             </Nav>  
        
    </Navbar>
         </div>
    );
}

export default NavHead;
   
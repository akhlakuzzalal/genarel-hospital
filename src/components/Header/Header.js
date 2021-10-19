import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
   const { user, logOut } = useAuth();

   return (
      <div className='navBorder'>
         <Navbar expand="lg" variant="dark" bg="dark">
            <Container>
               <Navbar.Brand as={Link} to="/home">Genarel Hospital</Navbar.Brand>
               <Navbar.Toggle />
               <Navbar.Collapse className="justify-content-end">
                  <Nav className="me-auto">
                     <Nav.Link as={Link} to="/home">Home</Nav.Link>
                     <Nav.Link as={Link} to="/pharmacy">Pharmacy</Nav.Link>
                     <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                  </Nav>
                  <Navbar.Text>
                     {
                        user?.email ?
                           <div className='d-flex align-items-center justify-content-center'>
                              <div>
                                 <h5> Log in as : {user.displayName}</h5>
                              </div>
                              <div className='ms-2'>
                                 <button className='btn btn-warning' onClick={logOut}>Log Out</button>
                              </div>
                           </div>
                           :
                           <p>Guest</p>
                     }

                  </Navbar.Text>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   );
};

export default Header;
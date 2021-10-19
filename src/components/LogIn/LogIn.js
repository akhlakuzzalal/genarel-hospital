import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import useLogIn from '../../hooks/useLogIn';

const LogIn = () => {
   const { user, error, seterror } = useAuth();
   const [isRegister, setIsRegister] = useState(false);
   const { NameChange, emailChange, passChange, handleLogIn, handleRegister, handleGoogle } = useLogIn();


   const ToggleCheakbox = (e) => {
      seterror('')
      setIsRegister(e.target.checked)
   };



   return (
      !user?.email ?
         <div>
            <h1 className='bg-dark text-light py-2 text-center'>Please {!isRegister ? 'Log In' : 'Register'}</h1>
            <div className='w-75 mx-auto'>
               <Form>
                  {
                     isRegister ?
                        <Form.Group className="mb-3" controlId="formBasicText">
                           <Form.Label>User Name</Form.Label>
                           <Form.Control onBlur={NameChange} type="text" placeholder="Enter User Name" required />
                        </Form.Group>
                        :
                        <div></div>
                  }
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Email address</Form.Label>
                     <Form.Control required onBlur={emailChange} type="email" placeholder="Enter email" />
                     <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                     </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label>Password</Form.Label>
                     <Form.Control onBlur={passChange} type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                     <Form.Check onChange={ToggleCheakbox} type="checkbox" label="Not Registered ?" />
                  </Form.Group>

                  {
                     !isRegister ?
                        <Button onClick={handleLogIn} variant="primary" type="submit">Log In</Button>
                        :
                        <Button onClick={handleRegister} variant="primary" type="submit">Register</Button>
                  }

               </Form>
            </div>
            <div className='w-50 my-3 mx-auto'>
               <button className="btn btn-info mx-auto" onClick={handleGoogle}>Log in Using Google</button>
            </div>
            <h4 className="ms-4 text-danger">{error}</h4>
         </div>
         :
         < div >
            <h2>You are Succesfully Logged In</h2>
         </div >
   );
};

export default LogIn;
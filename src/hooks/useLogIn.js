import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "./useAuth";

const useLogIn = () => {
   const { setUser, seterror, logInWithEmailPassword, RegisterWithEmailPassword } = useAuth();
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [displayName, setDisplayName] = useState()

   const history = useHistory();
   const location = useLocation();
   const redrct_url = location.state?.from || '/home';



   const emailChange = (e) => {
      seterror('')
      setEmail(e.target.value)
   };
   const passChange = (e) => {
      seterror('')
      setPassword(e.target.value)
   };
   const NameChange = (e) => {
      seterror('')
      setDisplayName(e.target.value)
   };
   const handleRegister = (e) => {
      e.preventDefault();
      RegisterWithEmailPassword(email, password, displayName)
   }
   const handleLogIn = (e) => {
      e.preventDefault();
      displayName ? seterror('') : seterror('input your name')
      logInWithEmailPassword(email, password)
         .then(result => {
            setUser(result.user);
            history.push(redrct_url);
         })
         .catch(error => {
            seterror(error.message)
         });
   }

   return {
      handleLogIn,
      handleRegister,
      NameChange,
      passChange,
      emailChange,
   }
}

export default useLogIn;
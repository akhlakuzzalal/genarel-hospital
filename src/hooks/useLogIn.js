import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "./useAuth";

const useLogIn = () => {
   const { setUser, seterror, logInWithEmailPassword, RegisterWithEmailPassword, setLoading, LogInwithGoogle } = useAuth();
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
            setLoading(true)
         })
         .catch(error => {
            seterror(error.message)
         })
         .finally(() =>
            setLoading(false))
         ;
   }

   const handleGoogle = () => {
      LogInwithGoogle()
         .then(result => {
            setUser(result.user)
            history.push(redrct_url);
            setLoading(true)
         })
         .catch(error => {
            seterror(error.message)
         })
         .finally(() => {
            setLoading(false)
         })
   }

   return {
      handleLogIn,
      handleRegister,
      NameChange,
      passChange,
      emailChange,
      handleGoogle
   }
}

export default useLogIn;
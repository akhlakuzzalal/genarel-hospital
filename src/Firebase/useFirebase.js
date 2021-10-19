import initFirebase from "./firebase.init";
import { GoogleAuthProvider, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";


const useFirebase = () => {
   const [user, setUser] = useState({});
   const [error, seterror] = useState('');
   const [loading, setLoading] = useState(true);

   initFirebase();
   const googleProvider = new GoogleAuthProvider();
   const auth = getAuth();

   // Updat NAme
   const updateName = (name) => {
      updateProfile(auth.currentUser, {
         displayName: name
      })
         .then(() => {

         })
         .catch(error => {
            seterror(error.message)
         })
   };

   // Log in with Google
   const LogInwithGoogle = () => {
      seterror('')
      return signInWithPopup(auth, googleProvider)
   };

   // register with email and password
   const RegisterWithEmailPassword = (email, password, displayName) => {
      seterror('')

      createUserWithEmailAndPassword(auth, email, password)
         .then(result => {
            updateName(displayName);
            setUser(result.user)
            setLoading(true)
         })
         .catch(error => {
            seterror(error.message)
         })
         .finally(() => {
            setLoading(false)
         });
   };
   // Log In with email and password
   const logInWithEmailPassword = (email, password) => {
      seterror('')
      return signInWithEmailAndPassword(auth, email, password)

   };

   const logOut = () => {
      seterror('')
      signOut(auth)
         .then(() => setUser({}))
         .finally(() => setLoading(false))
   };

   // Obsrve User State Changing
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, user => {
         if (user) {
            setUser(user);
            setLoading(false)
         }
         else {
            setUser({});
         }
      });
      return () => unsubscribe;
   }, []);


   return {
      loading,
      setLoading,
      setUser,
      user,
      seterror,
      error,
      LogInwithGoogle,
      RegisterWithEmailPassword,
      logInWithEmailPassword,
      logOut
   }
};

export default useFirebase;

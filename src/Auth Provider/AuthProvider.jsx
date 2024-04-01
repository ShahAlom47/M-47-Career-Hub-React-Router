
import PropTypes from 'prop-types'; // ES6
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)


const registerUser=( email, password)=>{
    return     createUserWithEmailAndPassword(auth, email, password)
}

const logInUser= (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)

}
const logOutUser =()=>{
  
signOut(auth)
}

// current useer
useEffect(()=>{
 const unSubscribe =   onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser)   
      });

      return ()=>unSubscribe();
},[])


console.log(user);

const AuthInfo = {user, registerUser,logInUser,logOutUser}
    return (
       <AuthContext.Provider value={AuthInfo}>
         <div>
            {children}
        </div>
       </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {

    children: PropTypes.node.isRequired,
}
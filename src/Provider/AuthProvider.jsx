import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext=createContext(null)

const googleProvider = new GoogleAuthProvider();

const auth= getAuth(app)

const AuthProvider = ({children}) => {
   const [user,setUser]=useState(null)
   const [loading,setLoading]=useState(false)

   

    const signup =(email,password)=>{
      setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)      
    }

    const signin=(email,password)=>{ 
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
    }
   const googleSignUp=()=>{
      setLoading(true)
     return  signInWithPopup(auth,googleProvider)
   }

   const updateUsersProfile=(name,photo)=>{
      return updateProfile(auth.currentUser,{
       displayName:name,
       photoURL:photo,
       })
     }

     const logOut=()=>{
      return signOut(auth)
     }
 

   //  on auth state Change -------------
   useEffect(()=>{
      const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
         console.log(currentUser)
         setUser(currentUser)
         setLoading(false)        
      })
      return ()=>{
         unSubscribe()
      }
   },[])

    

    const authInfo={
      signup,
      updateUsersProfile,
      signin, 
      user,
      loading,
      setLoading,
      googleSignUp,
      logOut,
    }

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
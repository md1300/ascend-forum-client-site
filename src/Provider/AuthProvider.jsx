import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from "../hook/useAxiosPublic";
import {useMutation }from '@tanstack/react-query'


export const AuthContext=createContext(null)

const googleProvider = new GoogleAuthProvider();

const auth= getAuth(app)

const AuthProvider = ({children}) => {
   const [user,setUser]=useState(null)
   const [loading,setLoading]=useState(false)
 const axiosPublic=useAxiosPublic()
   

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
         if(currentUser){
            saveUser(currentUser)
         }
         
         setLoading(false)        
      })
      return ()=>{
         unSubscribe()
      }
   },[])

   // --------------- take  users in usersCollection db --------------

   const {mutateAsync}=useMutation({
     mutationFn:async(userInfo)=>{
      const {data}=await axiosPublic.put('/users',userInfo)
      console.log(data)
     }
   })
// -------save users information ---------------
   const saveUser=async(user)=>{
      const userInfo={
         name:user?.displayName,
         email:user?.email,
         image:user?.photoURL,
         badge:'bronze',
         role:'user',
         status:'verified',
      }
console.log(userInfo)
      await mutateAsync(userInfo)
   }

    

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
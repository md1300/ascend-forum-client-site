import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { GrDislike, GrLike } from "react-icons/gr";
import { GoShareAndroid } from "react-icons/go";
import CommentModal from "../../Components/Modal/CommentModal";
import { useState } from "react";
import useAuth from "../../hook/useAuth";
import AlertModal from "../../Components/Modal/AlertModal";


const DetailsPost = () => {
    const {user}=useAuth()
    const {id}=useParams()
    const axiosPublic=useAxiosPublic()
    const [isOpen,setIsOpen]=useState(false)
    const [alertIsOpen,setAlertIsOpen]=useState(false)
    const [upVoteCount, setUpVoteCount]=useState(false)
    const [downVoteCount, setDownVoteCount]=useState(false)
    
  

//    ------------ handleUpVote ------------
const handleUpVote=async()=>{
    setUpVoteCount(!upVoteCount);
    setDownVoteCount(false)
    const upVoteInfo={
        action:'upVote',
        post_Title:post_Title,
    }
    try{
       const {data}=await axiosPublic.patch(`/posts/${_id}`,upVoteInfo)
       console.log(data)
    }
    catch(error){
        console.log(error.message)
    }
} 

// ----------------handleDownVote -----------------
const handleDownVote=async()=>{
    setDownVoteCount(!downVoteCount);
    setUpVoteCount(false)
    try{
        const {data}=await axiosPublic.patch(`/posts/${_id}`,{action:'downVote'})
        console.log(data)
        console.log('tawhid')
     }
     catch(error){
         console.log(error.message)
         console.log('tawhid')
     }
}
  
 

    
    // -----------closeModal -----------
    const closeModal=()=>{
        setIsOpen(false)
    }

    const alertCloseModal=()=>{
        setAlertIsOpen(false)
    }

// ----------------post comment data in db ------------

    const {data:postDetails=[],isLoading}=useQuery({
        queryKey:['post-details'],
        queryFn:async()=>{
            const {data}=await axiosPublic(`/post-details/${id}`)
            console.log(data)
            return data
        }
    })
    const {post_Title,category,post_time,author,description,_id}=postDetails;

    if(isLoading) return <div className="flex justify-center pt-40 "><span className="loading loading-spinner text-success "></span></div>
    return (
        <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <p>{_id}</p>
        <div className="flex items-center justify-between">
            <span className="text-sm font-light text-gray-600 dark:text-gray-400">{post_time}</span>
            <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" role="button">{category}</a>
        </div>
    
        <div className="mt-2">
            <a href="#" className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"  role="link">{post_Title}</a>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
        </div>
    
        <div className="flex items-center justify-between mt-4">
            {user? <button onClick={()=>setIsOpen(true)} className="text-blue-600 dark:text-blue-400 hover:underline btn bg-orange-300"  >comment</button> : <button onClick={()=>setAlertIsOpen(true)} className="text-blue-600 dark:text-blue-400 hover:underline btn bg-orange-300"  >comment</button> }
            
            <button onClick={handleUpVote} className={`text-blue-600 dark:text-blue-400 hover:underline btn ${upVoteCount? 'bg-red-300' : ''} ` } ><GrLike /></button>

            <button onClick={handleDownVote}  className={`text-blue-600 dark:text-blue-400 hover:underline btn ${downVoteCount? 'bg-red-300' : ''} ` }  ><GrDislike/></button>

            <button  className="text-blue-600 dark:text-blue-400 hover:underline"  ><GoShareAndroid /></button>
    
            <div className="flex items-center">
                <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src={author.image} alt="avatar"/>
                <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"  role="link">{author.name}</a>
            </div>
        </div>
        
       <CommentModal
        closeModal={closeModal}
       isOpen={isOpen}
       post_Title={post_Title}
       _id={_id}
       user={user}
       />
       <AlertModal
       alertCloseModal={alertCloseModal}
       alertIsOpen={alertIsOpen}/>
    </div>
    );
};

export default DetailsPost;
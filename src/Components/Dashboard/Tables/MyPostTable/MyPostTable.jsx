// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../../../hook/useAxiosPublic";
// import { useState } from "react";
// import CommentTableModal from "../../../Modal/CommentTableModal";
import {Link} from 'react-router-dom'

const MyPostTable = ({index,postData}) => {
  // const [isOpen,setIsOpen]=useState(false)
    // const axiosPublic=useAxiosPublic()
    // console.log(postData._id)

    // const closeModal=()=>{
    //   setIsOpen(false)
    // }
    // ------------handleCommentButton---------------
    // const handleCommentButton=()=>{
    //   setIsOpen(true)
    // }
 
  //  const {data=[]}=useQuery({
  //   queryKey:['myCommentData'],
  //   queryFn:async()=>{
  //     const {data}=await axiosPublic(`/comments/${postData._id}`)
  //     console.log(data)
  //     return data
  //   }
  //  })


    return (
       <>
    <tbody>
       <tr >
        <th>{index+1}</th>
        <td>{postData.post_Title}</td>
        <td>{postData.totalCount}</td>
        <td className="hover:bg-gray-300"><Link to={`/comments/${postData._id}`}>Comment</Link></td>
        <td className="hover:bg-gray-300"><button>Delete</button></td>
      </tr>    
    </tbody>
    {/* <CommentTableModal
    isOpen={isOpen}
    closeModal={closeModal}/> */}
    </>
    );
};

export default MyPostTable;
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import { useState } from "react";



const ManageUsers = () => {
  const [searchText,setSearchText]=useState([])
    const [search,setSearch]=useState([])
    const axiosPublic=useAxiosPublic()

    const {data:usersInfo=[],isLoading}=useQuery({
      queryKey:['usersinfo'],
      queryFn:async()=>{
        const {data}=await axiosPublic(`/users?search=${search}`)
        return data
      }
    })

    

    const handleMakingAdmin=async(id)=>{
        const {data}=await axiosPublic.patch(`/users/${id}`,{role:'admin'})
        console.log(data)
    }

    if(isLoading) return <div className="flex justify-center pt-40 "><span className="loading loading-spinner text-success "></span></div>

    // --------------handle submit button ----------------
    const handleSubmitForm=(e)=>{
          e.preventDefault()
          try{
            setSearch(searchText)
            setSearchText('')
          }
          catch(error){
            console.log(error.message)
          }
         
    }

    return (
        <div>
          <div className="m-10 ">
          <form onSubmit={handleSubmitForm}>
            <input type="text" placeholder="search user name" onChange={(e)=>{setSearchText(e.target.value)}} value={searchText}/>
            <button type="submit" className="btn ml-6">search</button>
          </form>
          </div>
            <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>users email</th>
              <th>user name </th>
              <th>role</th>
              <th>subscription status</th>
            </tr>
          </thead>
          <tbody>
            {
              usersInfo.map((userInfo,index)=><tr key={index}>
              <th>{index+1}</th>
              <td>{userInfo.email}</td>
              <td>{userInfo.name}</td>
              <td>{userInfo.role==='admin'?<button className="btn" disabled>admin</button>:<button onClick={()=>handleMakingAdmin(userInfo._id)} className="btn">make admin</button>}</td>
              <td ><p>free trail</p></td>
            </tr> )  
            }
          
    </tbody>
    </table>
    </div>
        </div>
    );
};

export default ManageUsers;
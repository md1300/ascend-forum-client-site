import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hook/useAxiosPublic";



const ManageUsers = () => {
    const axiosPublic=useAxiosPublic()
    const {data:usersInfo=[],isLoading}=useQuery({
      queryKey:['usersinfo'],
      queryFn:async()=>{
        const {data}=await axiosPublic('/users')
        return data
      }
    })

    

    const handleMakingAdmin=async(id)=>{
        const {data}=await axiosPublic.patch(`/users/${id}`,{role:'admin'})
        console.log(data)
    }

    if(isLoading) return <div className="flex justify-center pt-40 "><span className="loading loading-spinner text-success "></span></div>
    return (
        <div>
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
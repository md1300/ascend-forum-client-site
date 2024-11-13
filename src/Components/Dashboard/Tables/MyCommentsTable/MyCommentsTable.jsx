import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hook/useAxiosPublic";

const MyCommentsTable = () => {
    const {id}=useParams()
    const axiosPublic=useAxiosPublic()
    // console.log(id)
    const {data:myPostsComment=[]}=useQuery({
        queryKey:['myCommentData'],
        queryFn:async()=>{
          const {data}=await axiosPublic(`/comments/${id}`)
        //   console.log(data)
          return data
        }
       })
       console.log(myPostsComment)
    return (
        <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
                <th></th>
              <th>commenter email</th>
              <th>comment</th>
              <th>feedback </th>
              <th>report</th>
              
            </tr>
          </thead>
          <tbody>
            {
             myPostsComment.map((myPostComment,index)=><tr key={myPostComment._id} >
             <th>{index+1}</th>
             <th>{myPostComment.commenter}</th>
             <td>{myPostComment.comment}</td>       
             <td className="hover:bg-gray-300"><button >feedback </button></td>
             <td className="hover:bg-gray-300"><button>report</button></td>
           </tr> )   
            }
          
    </tbody>
          </table>
          </div>
    );
};

export default MyCommentsTable;
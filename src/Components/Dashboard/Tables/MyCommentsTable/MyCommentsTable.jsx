import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hook/useAxiosPublic";
import { useState } from "react";

const MyCommentsTable = () => {
  const { id } = useParams()
  const axiosPublic = useAxiosPublic()
  // console.log(id)
  // ---------------------------------------------
  const [isExtension, setIsExtension] = useState(false)
  const [isShowDropdown,setIsShowDropdown]=useState(false)
   
  const handleDropdownButton=()=>{
    setIsShowDropdown(!isShowDropdown)
  }
  
// --------------------- comment limitation ----------------
  const textLimit = 20;

  const handleTextLimitation = (text) => {
    const words = text.split('')
    if (words.length <= textLimit) {
      return text
    }
    const extension = words.slice(0, textLimit).join('') + '... ';
    return extension
  }
  //  -------------handletogglebutton -----------------
  const handleReadMoreButton = () => {
    setIsExtension(!isExtension)
  }
  //  -------------------------------------------

  const { data: myPostsComment = [] } = useQuery({
    queryKey: ['myCommentData'],
    queryFn: async () => {
      const { data } = await axiosPublic(`/comments/${id}`)
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
            myPostsComment.map((myPostComment, index) => <tr key={myPostComment._id} >
              <td>{index + 1}</td>
              <td>{myPostComment.commenter}</td>
              {
                myPostComment.comment.split().map((text, index) => <td key={index}>{isExtension ? text : handleTextLimitation(text)}
                  {text.split('').length > 20 && <button className="btn btn-link" onClick={handleReadMoreButton}>{
                    isExtension ? ' show less' : ' read more'}</button>}
                </td>)
              }
               <td >
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>feedback</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
   <ul className="flex flex-col">
    <li className="btn ">Good Explanation</li>
    <li className="btn "> inappropriate</li>
    <li className="btn "> More Details Needed</li>
   </ul>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog></td>
              <td className="hover:bg-gray-300"><button>report</button></td>
            </tr>)
          }

        </tbody>
      </table>
  
    </div>
  );
};

export default MyCommentsTable;
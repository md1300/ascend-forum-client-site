import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hook/useAxiosPublic";
import { useState } from "react";
import MyCommentsTableRow from "../MyCommentsTableRow/MyCommentsTableRow";

const MyCommentsTable = () => {
  const { id } = useParams()
  const axiosPublic = useAxiosPublic()
  // console.log(id)
  // ---------------------------------------------
  const [isExtension, setIsExtension] = useState(false)
  const [isFeedBack, setIsFeedBack] = useState(false)
  const [isReport, setIsReport] = useState(false)


 

  console.log(isFeedBack)
  console.log(isReport)
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
  // console.log(myPostsComment)


  

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
           myPostsComment.map((myPostComment, index) =><MyCommentsTableRow 
           key={index}
           handleReadMoreButton={handleReadMoreButton}
           myPostComment={myPostComment} 
           index={index}
           isExtension={isExtension}
           handleTextLimitation={handleTextLimitation}           
           isReport={isReport}
           isFeedBack={isFeedBack}
           setIsFeedBack={setIsFeedBack}
           setIsReport={setIsReport}/>)
        }

        </tbody>
      </table>

    </div>
  );
};

export default MyCommentsTable;
import useAxiosPublic from "../../../../hook/useAxiosPublic";


const MyCommentsTableRow = ({myPostComment,index,isExtension,handleTextLimitation,isFeedBack,isReport,setIsFeedBack,setIsReport,handleReadMoreButton}) => {

 const axiosPublic=useAxiosPublic()

    // -------------------handle feedBackInformation ------------
  const handleFeedBackInformation =async(text) => {
    setIsFeedBack(true)

   const feedBackInformation={
    feedback:text,
    comment:myPostComment.comment,
    commentId:myPostComment._id,
    report:'',
   }

   const {data}=await axiosPublic.post('/feedback',feedBackInformation)
     console.log(data)
  }

   // ------------ handle report button -------------------
   const handleReport=async(report)=>{
         setIsReport(true)
         console.log(report)
        const reportData={
            report:report
        }
        const {data}=await axiosPublic.patch(`/feedback/${myPostComment._id}`,reportData)
        console.log(data)
   }
 
  

    return (
        <div>
            
            <tr  >
              <td>{index + 1}</td>
              <td>{myPostComment.commenter}</td>
              {
                myPostComment.comment.split().map((text, index) => <td key={index}>{isExtension ? text : handleTextLimitation(text)}
                  {text.split('').length > 20 && <button className="btn btn-link" onClick={handleReadMoreButton}>{
                    isExtension ? ' show less' : ' read more'}</button>}
                </td>)
              }
              <td >
                <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>feedback</button>
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box">
                    <ul className="flex flex-col" >
                      <li className="btn" onClick={(e)=>handleFeedBackInformation(e.target.innerText)}>Good Explanation</li>
                      <li className="btn" onClick={(e)=>handleFeedBackInformation(e.target.innerText)}> inappropriate</li>
                      <li className="btn" onClick={(e)=>handleFeedBackInformation(e.target.innerText)}> More Details Needed</li>
                    </ul>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn" >Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
                </td>
              <td >
              <button disabled={isReport || !isFeedBack} className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>report</button>
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box">
                    <ul className="flex flex-col" >
                      <li  className="text-center">why do you want to report </li>
                      <li onClick={(e)=>handleReport(e.target.innerText)} className="btn" >problem involving someone under 18</li>
                      <li onClick={(e)=>handleReport(e.target.innerText)}  className="btn " > adult content</li>
                      <li onClick={(e)=>handleReport(e.target.innerText)} className="btn" >bulinying , harassment or abuse</li>
                    </ul>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button  className="btn" >close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </td>
            </tr>
         
        </div>
    );
};

export default MyCommentsTableRow;
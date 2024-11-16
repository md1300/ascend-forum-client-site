import { useState } from "react";
import useAxiosPublic from "../../../../hook/useAxiosPublic";


const ReportTableRow = ({index,report,refetch}) => {
    const [isDelete,setIsDelete]=useState(false)
    const axiosPublic=useAxiosPublic()
    const handleDeleteButton=async(id)=>{
        const {data}=await axiosPublic.delete(`/comment/${id}`)
        // console.log(data)
        if(data.deletedCount>0){
            setIsDelete(true)
        }
       refetch()
    }
    return (
        <tr>
        <th>{index+1}</th>
        <th>{report.commentId}</th>
        <th>{report.comment}</th>
        <th>{report.feedback}</th>
        <th>{report.report} </th>
        <th><button disabled={isDelete} onClick={()=>handleDeleteButton(report.commentId)} className="btn">delete</button></th>
    </tr>
    );
};

export default ReportTableRow;
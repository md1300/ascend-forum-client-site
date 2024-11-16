import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import ReportTableRow from "../../../Components/Dashboard/Tables/ReportTableRow/ReportTableRow";


const Reports = () => {
    const axiosPublic=useAxiosPublic()
    const {data:reports=[],isLoading,refetch}=useQuery({
        queryKey:['allreports'],
        queryFn:async()=>{
            const {data}=await axiosPublic('/feedback')
            // console.log(data)
            return data
        }
    })
    // console.log(reports)
    if(isLoading) return <div className="flex justify-center pt-40 "><span className="loading loading-spinner text-success "></span></div>
    return (
        <div className="overflow-x-auto">
             <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>commentId</th>
            <th>comment</th>
            <th>feedback </th>
            <th>report</th>
            <th>delete comment</th>
          </tr>
        </thead>
        <tbody>
           {
            reports.map((report,index)=><ReportTableRow
             key={index}
             report={report}
             index={index}
             refetch={refetch}/>)
           }

        </tbody>
          
      </table>
        </div>
    );
};

export default Reports;
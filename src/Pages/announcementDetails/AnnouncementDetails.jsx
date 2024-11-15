import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { useParams } from "react-router-dom";


const AnnouncementDetails = () => {
 const axiosPublic=useAxiosPublic()
 const {id}=useParams()
 console.log(id)
    const {data:specificAnnounce=[]}=useQuery({
        queryKey:['specificAnnounce'],
        queryFn:async()=>{
          const {data}=await axiosPublic(`/announcements/${id}`)
          console.log(data)
          return data
        }
      })
      console.log(specificAnnounce)

    return (
        <div>
            <p>{specificAnnounce.description}</p>
        </div>
    );
};

export default AnnouncementDetails;
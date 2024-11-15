import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import useAuth from "../../../hook/useAuth";


const Announcement = () => {
    const { register, handleSubmit } = useForm()
   const axiosPublic=useAxiosPublic()
   const {user}=useAuth()


    const onSubmit = async (data) => {
        // console.log('this is announcement page')
        const { title, description}=data
         
     
             try{             
               const announcementInfo = {
                authorName:user.displayName,
                authorImage:user.photoURL,
                title:title,
                description:description,
               }
     
               console.log( announcementInfo)
               const {data}=await axiosPublic.post('/announcements',announcementInfo) 
               console.log(data)
            
             }
             catch(error){
               console.log(error.message)
             } 
            
             
         
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col">
                    <label>title </label>
                    <input className="border " {...register("title")} />
                    <label>description </label>
                    <input className="border" type="area" {...register("description")} />


                    <input className="btn" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default Announcement;
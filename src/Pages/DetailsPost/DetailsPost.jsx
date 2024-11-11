import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { GrDislike, GrLike } from "react-icons/gr";


const DetailsPost = () => {
    const {id}=useParams()
    const axiosPublic=useAxiosPublic()
    const {data:postDetails,isLoading}=useQuery({
        queryKey:['post_details'],
        queryFn:async()=>{
            const {data}=await axiosPublic(`/post-details/${id}`)
            console.log(data)
            return data
        }
    })
    const {post_Title,category,post_time,author,upVote,downVote,comment_count,description,_id}=postDetails;
    return (
        <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <p>{_id}</p>
        <div className="flex items-center justify-between">
            <span className="text-sm font-light text-gray-600 dark:text-gray-400">{post_time}</span>
            <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabindex="0" role="button">{category}</a>
        </div>
    
        <div className="mt-2">
            <a href="#" className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabindex="0" role="link">{post_Title}</a>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
        </div>
    
        <div className="flex items-center justify-between mt-4">
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline" tabindex="0" role="link">comment</a>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline" tabindex="0" role="link"><GrLike /></a>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline" tabindex="0" role="link"><GrDislike/></a>
    
            <div className="flex items-center">
                <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src={author.image} alt="avatar"/>
                <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200" tabindex="0" role="link">{author.name}</a>
            </div>
        </div>
    </div>
    );
};

export default DetailsPost;
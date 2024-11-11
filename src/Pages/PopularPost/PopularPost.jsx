import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from "../../hook/useAxiosPublic";
import UserPostDataBox from '../../Components/Homepages/Banner/usersPost/UserPostDataBox';

const PopularPost = () => {
    const axiosPublic=useAxiosPublic()

    const {data:popularPosts, isLoading, }=useQuery({
        queryKey:['popularity'],
        queryFn:async()=>{
            const {data}=await axiosPublic('/popularity')
        //    console.log(data)
           return data
        }
    })

    if(isLoading)return <div className="flex justify-center pt-40 "><span className="loading loading-spinner text-success "></span></div>

    
    return (
        <div>
            <h1>this is popular post page</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
            {
                popularPosts.map((postData,index)=><UserPostDataBox className='text-rose-700' key={index} postData={postData}></UserPostDataBox>)
            }
        </div>
        </div>
    );
};

export default PopularPost;
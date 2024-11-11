import { useQuery } from '@tanstack/react-query';
import UserPostDataBox from './UserPostDataBox';
import useAxiosPublic from '../../../../hook/useAxiosPublic';
import Pagination from './Pagination';
import { useState } from 'react';
import {Link} from 'react-router-dom'


const UsersPostData = () => {
    const [loading,setloading]=useState(false)
    const axiosPublic=useAxiosPublic()
    // ------------------
    const [currentPage,setCurrentPage]=useState(1)
    const [itemsPerPage,setItemsPerPage]=useState(5)
    const [countPage,setCountPage]=useState(0)


    const {data:postsData,isLoading}=useQuery({
           queryKey:['posts-Data'],
           queryFn:async()=>{
            const {data}=await axiosPublic(`/posts?page=${currentPage}&&size=${itemsPerPage}`)
            console.log(data)
            setCountPage(data.totalCount)
            return data.result
           }
    })

   const handlePaginationButton=async(value)=>{
    
    // console.log(value)
    try{
        setloading(true)
      await  setCurrentPage(value)
    }
    catch(error){
        console.log(error.message)
    }
    finally{
        setloading(false)
    }

   
   }

   

 const numberOfpages=Math.ceil(countPage/itemsPerPage)

 const pages=[...Array(numberOfpages).keys().map(element=>element+1)]

//  console.log(pages)

    if(isLoading)return <div className="flex justify-center pt-40 "><span className="loading loading-spinner text-success "></span></div>
    // console.log(postsData)
    if(loading) return  <div className="flex justify-center pt-40 "><span className="loading loading-spinner text-success "></span></div>
    

    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
            {
                postsData.map((postData,index)=><UserPostDataBox className='text-rose-700' key={index} postData={postData}></UserPostDataBox>)
            }
        </div>
        <div className='flex flex-col items-center  my-7'>
        <Pagination 
        handlePaginationButton={handlePaginationButton}
        currentPage={currentPage}
        pages={pages}
        numberOfpages={numberOfpages}
        
        />
        </div>
          
          <div className='text-center my-7'>
          <Link to='/popular-post' className='btn bg-orange-300 '>see all popular post</Link>

          </div>
        </>
    );
};

export default UsersPostData;
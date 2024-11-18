import {useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosPublic from './useAxiosPublic';
const useRole = () => {
const {user}=useAuth()
const axiosPublic=useAxiosPublic()
    const {data:UserData,isLoading,refetch}=useQuery({

        queryKey:['user'],
        queryFn:async()=>{
          const {data}=await axiosPublic(`/users/${user?.email}`,{withCredentials:true})
          // console.log(data)
          return data
        }
    })

   

    return [UserData,isLoading,refetch]
};

export default useRole;
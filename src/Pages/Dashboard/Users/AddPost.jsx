import { useState } from "react";
import Select from 'react-select';
import { categoriesData } from "../../../Components/category/categoriesData";
import { useForm } from "react-hook-form";
import useAuth from "../../../hook/useAuth";
import axios from 'axios'

const AddPost = () => {
    const {user}=useAuth()
    const [selectedOption, setSelectedOption] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

   const onSubmit=async(data)=>{
        if(selectedOption===null) return alert('please select a category first')
        // console.log(data)
    const postInfo={
        author:{
            name:user.displayName,
            image:user.photoURL,
            email:user.email,
        } ,
        post_Title:data.post_title,
        description:data.Description,
        upVote:0,
        downVote:0,
        category:selectedOption.label,
        comment_count:0,
    }
console.log(postInfo)
    try{
         const {data}=await axios.post(`${import.meta.env.VITE_API_URL}/posts`,postInfo)
         console.log(data)
    }
    catch(error){
        console.log(error.message)
    }
        
      }



    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" >Post title</label>
                        <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" {...register("post_title", { required: true })} />
                        {errors.post_title && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" >Category</label>
                        <div >
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={categoriesData}
      />
       
    </div>
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Description</span>
                        </div>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Bio" {...register("Description", { required: true })} ></textarea>
                        {errors.Description && <span className="text-red-500">This field is required</span>}

                    </label>
                </div>

                <div className="flex justify-end mt-6">
                    <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-orange-700 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600">Save</button>
                </div>
            </form>
        </section>
    );
};

export default AddPost;



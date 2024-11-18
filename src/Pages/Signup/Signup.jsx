import { useForm } from "react-hook-form";
import { uploadImage } from "../../imageApi/ImageApi";
import useAuth from "../../hook/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import useAxiosPublic from "../../hook/useAxiosPublic";


const Signup = () => {
  const {signup,updateUsersProfile,googleSignUp,loading,setLoading}=useAuth();
    const {register,handleSubmit,formState:{errors}}=useForm();
    const navigation=useNavigate()
 const location=useLocation();
 const from=location.state || ('/')
 const axiosPublic=useAxiosPublic()
 

    const onSubmit=async(data)=>{
       const {email,password,name,photo}=data ;
       const image = photo[0];
      //  console.log("Uploaded image:", image);
       
  if (!photo || photo.length === 0) {
    console.log("No photo selected.");
    return;
  }
        try{
         
          const image_url =await uploadImage(image)

          // console.log(image_url)
       const {user}=await signup(email,password)
        //  console.log(user)
         await updateUsersProfile(name,image_url)
        const {data}=await axiosPublic.post('/jwt',user.email,)
        console.log(data)
         navigation(from)
         toast.success('signUp successfully')
        }
        catch(error){
          console.log(error.message)
          toast.error(error.message)
        } 
        finally{
          setLoading(false)
        }  
    }

    const handleGoogleSignUp=async()=>{
      try{
        const {user}= await googleSignUp()
        // console.log(user)
        const {data}= await axiosPublic.post('/jwt',user.email,{withCredentials:'include'})
        console.log(data)
        navigation(from)
        toast('successfully log in ')
      }
      catch(error){
        console.log(error.message)
        toast(error.message)
      }
      finally{
        setLoading(false)
      }
     }
     
     if(loading) return <div className="flex justify-center pt-40 "><span className="loading loading-spinner text-success "></span></div>

    return (
        <div className="w-1/2 mx-auto  min-h-screen">
        <div className="hero-content flex-col gap-6">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            
          </div>
          <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">user Name</span>
                </label>
                <input type="text"  {...register("name", { required: true })} name='name' placeholder="type your name" className="input input-bordered"  />
      {/* errors will return when field validation fails  */}
      {errors.name && <span className="text-red-500">your name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">give your Photo</span>
                </label>
                <input type="file"  {...register("photo", { required: true })} name='photo' placeholder="give your photo" className="input input-bordered"  />
      {/* errors will return when field validation fails  */}
      {errors.photo && <span className="text-red-500">photo is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"  {...register("email", { required: true })} name='email' placeholder="type your email name" className="input input-bordered"  />
      {/* errors will return when field validation fails  */}
      {errors.email && <span className="text-red-500">email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", { required: true })} name='password' placeholder="type password" className="input input-bordered"  />
      {/* errors will return when field validation fails  */}
      {errors.email && <span className="text-red-500">password is required</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <div className="px-24 mb-4">
              <button onClick={handleGoogleSignUp} className="btn bg-orange-100 text-orange-500"> signUp with google </button>
            </div>
            <div>
            <p className="px-24">if you do not have already an account <Link to='/login' className="btn btn-link text-orange-500 ">sign in</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Signup;
import { useForm, } from "react-hook-form"
import useAuth from "../../hook/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'

import useAxiosPublic from "../../hook/useAxiosPublic";




const Login = () => {
  const {signin,googleSignUp,loading,setLoading}=useAuth()
  const navigation=useNavigate();
  const location=useLocation();
  const from=location?.state || '/'
  const axiosPublic=useAxiosPublic()
  // console.log(signin)
   const {register, formState: { errors },handleSubmit,}=useForm()

   const onSubmit=async(data)=>{
    const {email,password}=data
    // console.log(email,password)
    try{
        const {user}=await signin(email,password)
        console.log(user)
        if(user.email){
          const {data}=await axiosPublic.post('/jwt',user.email,)
        console.log(data)
          navigation(from)
          toast.success('successfully log in ')
        }
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
      console.log(user)
        navigation(from)
        toast.success('successfully log in ')
     
    }
    catch(error){
      console.log(error.message)
      toast.error(error.message)
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
            <h1 className="text-5xl font-bold">Login now!</h1>
            
          </div>
          <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="px-24 mb-4">
              <button disabled={loading? true : false} onClick={handleGoogleSignUp} className="btn bg-orange-100 text-orange-500"> signUp with google </button>
            </div>
            <div>
            <p className="px-24">if you do not have already an account <Link to='/signup' className="btn btn-link text-orange-500 ">sign up</Link></p>
            </div>
          </div>
        </div>
    
      </div>
    );
};

export default Login;
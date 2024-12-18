import { Link, NavLink } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import logoImage from '../../assets/logo.jpg';
import useAuth from '../../hook/useAuth'
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/useAxiosPublic";
// import { useState } from "react";

const Navbar = () => {
  const { user,logOut } = useAuth()
  // const [isOpen, setIsOpen] = useState(false)
  const axiosPublic=useAxiosPublic()

  // console.log(user)
  const navLink = <>
    <li><NavLink to='/' className={({ isActive }) => isActive ? 'btn btn-ghost bg-orange-300' : 'btn btn-ghost bg-white'}> Home </NavLink></li>
    <li><NavLink to='/membership' className={({ isActive }) => isActive ? 'btn btn-ghost bg-orange-300' : 'btn btn-ghost bg-white'}> MemberShip </NavLink></li>
  </>

  const handleLogOut=async()=>{
    await logOut ()
  }

const {data:announcements={}}=useQuery({
  queryKey:['announcement'],
  queryFn:async()=>{
    const {data}=await axiosPublic('/announcements')
    // console.log(data)
    return data
  }
})
console.log(announcements)
// console.log(announcements.result)

const arrayOfAnnouncement=announcements.result || [];
console.log(arrayOfAnnouncement)


  return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="w-16  rounded-lg"><img src={logoImage} alt="logo" /></div>
    <a className="btn btn-ghost text-xl text-orange-300">ASCEND-FORUM</a>   
  </div>

 <div className="navbar-center ">
  <ul className="menu menu-horizontal px-1">
    {navLink}
  </ul>
 </div>

  <div className="navbar-end">
    {announcements.totalAnnouncement>0 && <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <IoMdNotificationsOutline className="text-2xl"/>
          <span className="badge badge-sm indicator-item">{announcements.totalAnnouncement}</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
          {
            arrayOfAnnouncement.map(data=><div key={data._id} className="card-body">
              <span className="text-lg font-bold">{data.title }</span>
              <div className="card-actions">
                <Link to={`/announcement/${data._id}`}  className="btn btn-primary btn-block">View description</Link>
              </div>
            </div>)
          }
                
      </div>
    </div> }
        
    <div className="dropdown dropdown-end">
      {
        user?<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user?.photoURL}/>
        </div>
      </div> : <div> <button className="btn btn-ghost text-orange-300 text-2xl">Join Us</button> </div>
      }
      
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          {
            user? <><li>
            <p >
              {user?.displayName}           
            </p>
          </li>
          <li><Link to='dashboard'>dashboard</Link></li>
          <li><button onClick={handleLogOut}>Logout</button></li></> :
           <>
          <li><Link to='/signup'  >sign up</Link ></li>
          <li><Link to='/login' >log in</Link ></li>
          </>
          }
        
      </ul>
    </div>
  </div>
</div>
   
  );
};

export default Navbar;
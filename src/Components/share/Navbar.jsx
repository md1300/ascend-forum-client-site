import { Link, NavLink } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import logoImage from '../../assets/logo.jpg'

const Navbar = () => {

  const navLink=<>
  <li><NavLink to='/' className={({isActive})=>isActive? 'btn btn-ghost bg-orange-300':'btn btn-ghost bg-white'}> Home </NavLink></li>
  <li><NavLink to='/membership' className={({isActive})=>isActive?'btn btn-ghost bg-orange-300':'btn btn-ghost bg-white'}> MemberShip </NavLink></li>
  
  </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navLink}
      </ul>
    </div>
    <div className="avatar">
  <div className="mask mask-hexagon w-14">
    <img src={logoImage} />
  </div>
</div>
    <a className="btn btn-ghost text-xl text-orange-300">ASCEND-FORUM</a>
  </div>
  <div className="navbar-center hidden lg:flex gap-4">
    <ul className="menu menu-horizontal px-1 gap-4">
      {navLink}
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <a className="text-2xl" > <IoMdNotificationsOutline /> </a>
    <Link to='/login' className="btn bg-orange-300">Join Us</Link>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;
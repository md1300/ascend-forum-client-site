import { NavLink } from "react-router-dom";


const MenuItem = ({address,label, icon:Icon}) => {
    return (
       <NavLink
       to={address}
       end
       className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-orange-300   hover:text-orange-700 ${
          isActive ? 'bg-orange-300  text-orange-700' : 'text-orange-600'
        }`}
       >
        
            <Icon/>
            <span>{label}</span>
        

       </NavLink>
    );
};

export default MenuItem;
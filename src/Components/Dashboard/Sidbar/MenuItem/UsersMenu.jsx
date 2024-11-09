import MenuItem from "./MenuItem";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { GrDocumentStore } from "react-icons/gr";
import { MdOutlineAddCircleOutline } from "react-icons/md";

const UsersMenu = () => {

    return (
        <div>
            <MenuItem address='my-profile' label='My Profile' icon={GiPlagueDoctorProfile } />
            <MenuItem address='add-post' label='Add Post' icon={MdOutlineAddCircleOutline  } />
            <MenuItem address='my-posts' label='My Posts' icon={GrDocumentStore } />
            
        </div>
    );
};

export default UsersMenu;
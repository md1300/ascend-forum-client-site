import { GrAnnounce } from "react-icons/gr";
import { GiPlagueDoctorProfile } from 'react-icons/gi';
import { BiSolidReport } from "react-icons/bi";
import { SiManageiq } from "react-icons/si";
import MenuItem from './MenuItem';

const AdminMenu = () => {
    return (
        <div>
             <MenuItem address='admin-profile' label='Admin Profile' icon={GiPlagueDoctorProfile } />
            <MenuItem address='manage-users' label=' Manage Users' icon={ SiManageiq } />
            <MenuItem address='report-comments' label='Reported Comments' icon={BiSolidReport } />
            <MenuItem address='announcement' label='Make Announcement' icon={GrAnnounce} />
            
            
        </div>
    );
};

export default AdminMenu;
import { Link } from "react-router-dom";
import logoImage from '../../../assets/logo.jpg'
import UsersMenu from "./MenuItem/UsersMenu";
import CommonMenu from "./MenuItem/CommonMenu";
import AdminMenu from "./MenuItem/AdminMenu";
import useRole from "../../../hook/useRole";


const Sidbar = () => {
    const [userData,isLoading]=useRole()
    if(isLoading) return <div className="flex justify-center pt-40 "><span className="loading loading-spinner text-success "></span></div>

    return (
        <div>
            <div className="mb-5">
                <Link to='/' className="btn btn-ghost">
                    <div className="w-16  rounded-lg"><img src={logoImage} alt="logo" /></div>
                    <p className=" text-xl text-orange-300">ASCEND-FORUM</p>
                </Link>
            </div>
            <div>
                <CommonMenu />
            </div>
            {userData?.role==='admin' ? <div>
                <AdminMenu/>
            </div> : <div>
<UsersMenu />
</div> }
            
            

        </div>
    );
};

export default Sidbar;
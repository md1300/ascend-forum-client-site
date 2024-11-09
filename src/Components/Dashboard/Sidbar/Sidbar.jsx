import { Link } from "react-router-dom";
import logoImage from '../../../assets/logo.jpg'
import UsersMenu from "./MenuItem/UsersMenu";
import CommonMenu from "./MenuItem/CommonMenu";


const Sidbar = () => {
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
            <div>

                <UsersMenu />
            </div>

        </div>
    );
};

export default Sidbar;
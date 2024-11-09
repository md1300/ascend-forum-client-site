import { Outlet } from "react-router-dom";
import Sidbar from "../Components/Dashboard/Sidbar/Sidbar";


const Dashboard = () => {
    return (
        <div className="flex">
        <div>
            <Sidbar/>
        </div>
       <div className="flex-1 ml-36">
       <Outlet/>
       </div>
        </div>
    );
};

export default Dashboard;
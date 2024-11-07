import { Outlet } from "react-router-dom";
import Navbar from "../Components/share/Navbar";
import Footer from "../Components/share/Footer";

const Main = () => {
    return (
        <div className=" m-auto">
            <Navbar/>
            <div className="pt-2 min-h-[calc(100vh-198px)]">
            <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default Main;
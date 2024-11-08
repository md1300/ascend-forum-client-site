import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Homepage/Home";
import MemberShip from "../Pages/MemberShip/MemberShip";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'/membership',
          element:<MemberShip/>
        },
      ]
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<Signup/>
    }
  ]);
export default router;
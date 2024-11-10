import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Homepage/Home";
import MemberShip from "../Pages/MemberShip/MemberShip";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Dashboard from "../Layout/Dashboard";
import Statistic from "../Pages/Dashboard/Common/Statistic";
import AddPost from "../Pages/Dashboard/Users/AddPost";
import MyProfile from "../Pages/Dashboard/Users/MyProfile";
import MyPosts from "../Pages/Dashboard/Users/MyPosts";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/membership',
        element: <MemberShip />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      //  ---------- route for users --------------
      {
        index: true,
        element: <Statistic />
      },
      {
        path:'add-post',
        element:<AddPost/>
      },
      {
        path:'user-profile',
        element:<MyProfile/>
      },
      {
        path:'user-posts',
        element:<MyPosts/>
      },
    ]
  }
]);
export default router;
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
import PopularPost from "../Pages/PopularPost/PopularPost";
import DetailsPost from "../Pages/DetailsPost/DetailsPost";
import MyCommentsTable from "../Components/Dashboard/Tables/MyCommentsTable/MyCommentsTable";
import AdminProfile from "../Pages/Dashboard/Admin/AdminProfile";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import Reports from "../Pages/Dashboard/Admin/Reports";
import Announcement from "../Pages/Dashboard/Admin/Announcement";
import AnnouncementDetails from "../Pages/announcementDetails/AnnouncementDetails";


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
    path: '/post-details/:id',
    element: <DetailsPost />
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
    path: '/popular-post',
    element: <PopularPost />
  },
  {
    path: '/comments/:id',
    element: <MyCommentsTable />
  },
  {
    path:'/announcement/:id',
    element:<AnnouncementDetails/>
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
        path: 'add-post',
        element: <AddPost />
      },
      {
        path: 'user-profile',
        element: <MyProfile />
      },
      {
        path: 'user-posts',
        element: <MyPosts />
      },
      {
        path: 'admin-profile',
        element: <AdminProfile />
      },
      {
        path: 'manage-users',
        element: <ManageUsers />
      },
      {
        path:'report-comments',
        element:<Reports/>
      },
      {
        path:'announcement',
        element:<Announcement/>
      }
    ]
  }
]);
export default router;
import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";
import Layout from "../pages/layout/Layout";
import Profile from "../pages/profile/Profile";
import PrivateRoute from "../privateRoutes/PrivateRoute";
import EditProfile from "../pages/editProfile/EditProfile";
// import Update from "../pages/updatee/Update";



export let myRoutes=createBrowserRouter([
    {
        path:'/',
        element:<Layout />,
        children:[
            {
                path:'/',
                element:<Signup />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                    //dynamic data :-id attach to login page authUser
                path:'/profile/:id',
                element:
                <PrivateRoute>
                    {/* it is a children */}
                    <Profile /> 
                </PrivateRoute>
            },
            {
                path:'/edit/:editid',
                element:<PrivateRoute>
                    <EditProfile/>
                </PrivateRoute>
            }
        ]
    },
])
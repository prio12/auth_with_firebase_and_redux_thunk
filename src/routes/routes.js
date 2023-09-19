import { createBrowserRouter } from "react-router-dom";
import Main from "../outlet/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/signUp',
                element:<SignUp/>
            },
            {
                path:"/logIn",
                element:<Login/>
            }
        ]

    }
])
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


const routes =createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
        {
            path:'/home',
            element:<Home></Home>,
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
    ]
    }
])
export default routes;
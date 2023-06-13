import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/login/login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layouts/Dashboard";
import ManageUser from "../pages/Dashboard/Admin/ManageUsers/ManageUser";
import Classes from "../pages/Classes/Classes";
import SelectedClass from "../pages/Dashboard/Student/SelectedClass/selectedClass";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Instructors from "../pages/Instructors/Instructor";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'classes',
                element: <Classes />
            },
            {
                path: 'instructors',
                element: <Instructors />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signUp',
                element: <SignUp />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute> <Dashboard /> </PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'selectedClasses',
                element: <SelectedClass />
            },
            // {
            //     path: 'adminHome',
            //     element: <DashboardHome />
            // },
            {
                path: 'manageUsers',
                element: <ManageUser />
            }
        ] 
    }
])

export default routers;
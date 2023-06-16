import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/login/login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layouts/Dashboard";
import ManageUser from "../pages/Dashboard/Admin/ManageUsers/ManageUser";
import Classes from "../pages/Classes/Classes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Instructors from "../pages/Instructors/Instructor";
import AddClass from "../pages/Dashboard/Instructor/AddClass/AddClass";
import InstructorRoute from "./InstructorRoute";
import MyAllClass from "../pages/Dashboard/Instructor/MyAllClass/MyAllClass";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import Payment from "../pages/Dashboard/Student/Payment/Payment";
import AdminRoute from "./AdminRoute";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import InstructorHome from "../pages/Dashboard/Instructor/InstructorHome/InstructorHome";
import StudentHome from "../pages/Dashboard/Student/StudentHome/StudentHome";
import EnrolledClasses from "../pages/Dashboard/Student/EnrolledClasses/EnrolledClasses";
import SelectedClass from "../pages/Dashboard/Student/SelectedClass/SelectedClass";
import PaymentHistory from "../pages/Dashboard/Student/Payment/PaymentHistory";

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
                path: 'adminHome',
                element: <AdminHome />
            },
            {
                path: 'manageUsers',
                element: <AdminRoute> <ManageUser /> </AdminRoute>
            },
            {
                path: 'manageClasses',
                element: <AdminRoute> <ManageClasses /> </AdminRoute>
            },
            {
                path: 'instructorHome',
                element: <InstructorHome />
            },
            {
                path: 'addClasses',
                element: <InstructorRoute> <AddClass /> </InstructorRoute>
            },
            {
                path: 'myClasses',
                element: <InstructorRoute> <MyAllClass /> </InstructorRoute>
            },
            {
                path: 'studentHome',
                element: <StudentHome />
            },
            {
                path: 'selectedClasses',
                element: <SelectedClass />
            },
            {
                path: 'enrolledClasses',
                element: <EnrolledClasses />
            },
            {
                path: 'payment',
                element: <Payment />
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory />
            },
        ] 
    }
])

export default routers;
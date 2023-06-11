import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
// import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/login/login";
import SignUp from "../pages/SignUp/SignUp";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
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
    }
])

export default routers;
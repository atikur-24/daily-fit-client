import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp');

    return (
        <>
            { noHeaderFooter || <Navbar /> }
            <Outlet />
            { noHeaderFooter || <Footer /> }
        </>
    );
};

export default Main;
import { NavLink, Outlet } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
import { HiBadgeCheck, HiBookmark, HiClipboardList, HiFolderAdd, HiFolderOpen, HiHome, HiUserGroup } from "react-icons/hi";


const Dashboard = () => {
    // const { user } = useAuth();
    const user = false;
    const isAdmin = true;
    const isInstructor = false;

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col mx-10">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet />
                
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}

                        { isAdmin && <>
                        <li><NavLink to='/dashboard/adminHome'><HiHome /> Admin Home</NavLink></li>
                        <li><NavLink to='/dashboard/manageClasses'><HiClipboardList /> Manage Classes</NavLink></li>
                        <li><NavLink to='/dashboard/manageUsers'><HiUserGroup /> Manage Users</NavLink></li>
                        </> }

                        { isInstructor && <>
                        <li><NavLink to='/dashboard/instructorHome'><HiHome />Instructor Home</NavLink></li>
                        <li><NavLink to='/dashboard/userHome'><HiFolderAdd/> Add Class</NavLink></li>
                        <li><NavLink to='/dashboard/reservation'><HiFolderOpen /> My Classes</NavLink></li>
                        </> }

                        { user && <>
                        <li><NavLink to='/dashboard/studentHome'><HiHome /> Student Home</NavLink></li>
                        <li><NavLink to='/dashboard/userHome'><HiBookmark/> My Selected Classes</NavLink></li>
                        <li><NavLink to='/dashboard/reservation'><HiBadgeCheck /> My Enrolled Classes</NavLink></li>
                        </>}
                        <div className="divider"></div>       
                        <li><NavLink to='/' ><HiHome /> Home</NavLink></li>
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
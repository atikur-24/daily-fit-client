import { NavLink, Outlet } from "react-router-dom";
import { HiBadgeCheck, HiBookmark, HiClipboardList, HiFolderAdd, HiFolderOpen, HiHome, HiUserGroup } from "react-icons/hi";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [isAdmin] = useAdmin();

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

                    {
                        isAdmin ?
                        <>
                        <li><NavLink to='/dashboard/adminHome'><HiHome /> Admin Home</NavLink></li>
                        <li><NavLink to='/dashboard/manageClasses'><HiClipboardList /> Manage Classes</NavLink></li>
                        <li><NavLink to='/dashboard/manageUsers'><HiUserGroup /> Manage Users</NavLink></li>
                        </> :

                        <>
                        <li><NavLink to='/dashboard/studentHome'><HiHome /> Student Home</NavLink></li>
                        <li><NavLink to='/dashboard/userHome'><HiBookmark/> My Selected Classes</NavLink></li>
                        <li><NavLink to='/dashboard/reservation'><HiBadgeCheck /> My Enrolled Classes</NavLink></li>
                        </>
                    }
                        {/* { isAdmin && <>
                        <li><NavLink to='/dashboard/adminHome'><HiHome /> Admin Home</NavLink></li>
                        <li><NavLink to='/dashboard/manageClasses'><HiClipboardList /> Manage Classes</NavLink></li>
                        <li><NavLink to='/dashboard/manageUsers'><HiUserGroup /> Manage Users</NavLink></li>
                        </> }

                        { isInstructor && <>
                        <li><NavLink to='/dashboard/instructorHome'><HiHome />Instructor Home</NavLink></li>
                        <li><NavLink to='/dashboard/selectedClasses'><HiFolderAdd/> Add Class</NavLink></li>
                        <li><NavLink to='/dashboard/enrolledClasses'><HiFolderOpen /> My Classes</NavLink></li>
                        </> }

                        <li><NavLink to='/dashboard/studentHome'><HiHome /> Student Home</NavLink></li>
                        <li><NavLink to='/dashboard/userHome'><HiBookmark/> My Selected Classes</NavLink></li>
                        <li><NavLink to='/dashboard/reservation'><HiBadgeCheck /> My Enrolled Classes</NavLink></li> */}

                        <div className="divider"></div>       
                        <li><NavLink to='/' ><HiHome /> Home</NavLink></li>
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
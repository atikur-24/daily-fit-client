import { Link, NavLink } from "react-router-dom";
import logo from '/white-1.svg'
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout().then(()=>{}).catch(error=>console.error(error))
  }

    const navItems = <>
    <li><NavLink className={({ isActive }) => (isActive ? "active" : "default")} to='/'>Home</NavLink></li>
    <li><NavLink className={({ isActive }) => (isActive ? "active" : "default")} to='/classes'>Classes</NavLink></li>
    <li><NavLink className={({ isActive }) => (isActive ? "active" : "default")} to='/instructors'>Instructors</NavLink></li>
    {user && <li><NavLink className={({ isActive }) => (isActive ? "active" : "default")} to='/dashboard'>Dashboard </NavLink></li>}
    </>
  return (
    <div className="navbar z-10 fixed text-white lg:mt-4 lg:ml-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gray-500 rounded-box w-52"
          >
            { navItems }
          </ul>
        </div>
          <img className="h-10 lg:h-14" src={logo} alt="logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            { navItems }
        </ul>
      </div>
      <div className="navbar-end lg:mr-28">
        { user ? <button onClick={handleLogout} className="btn btn-sm text-black">Logout</button> : <Link to='/login' className="btn btn-sm text-black">Login</Link>}
        { user && <label tabIndex={0} className="btn btn-ghost btn-circle avatar ml-3">
          <div className="w-10 rounded-full">
            <img title={user?.displayName} src={user?.photoURL} />
          </div>
        </label>}
  </div>
    </div>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { authContext } from '../Auth/AuthProvider';

const Navbar = () => {
  const { logout, user,  } = useContext(authContext);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <Link to="/" className="btn btn-ghost text-xl">Get Book</Link>
    </div>
    <div>
      {!user ? (
        <>
          <Link className="mr-3" to="/register">Register</Link>
          <Link className="mr-3" to="/login">Login</Link>
        </>
      ) : (
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              {/* <li>
                <Link to="/profile">Profile</Link>
              </li> */}
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  </div>
);
};

export default Navbar;

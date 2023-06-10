import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { FaUserCircle } from 'react-icons/fa';
const Navbar = () => {
  const { user, logOut } = useAuth();
  // console.log(user?.displayName);
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => {
        console.log(error.message);
      })
  }

  const navOptions = <>
    <li><NavLink to='/'>Home</NavLink ></li>
    <li><NavLink to='/instructors'>Instructors</NavLink ></li>
    <li><NavLink to='/allClasses'>Classes</NavLink ></li>
    {user&& <li><NavLink to='/dashboard'>Dashboard</NavLink ></li>}
    {/* <li><NavLink to={isAdmin ? '/dashboard/adminHome' : '/dashboard/userHome'}>Dashboard</NavLink ></li> */}
    {/* <li> <NavLink to='/dashboard/myCart'><button className="btn gap-2">
  <FaShoppingCart></FaShoppingCart>
  <div className="badge badge-secondary">+{cart?.length || 0}</div>
</button></NavLink> </li> */}

{user ? <> <button onClick={handleLogOut} className='btn btn-ghost'>Logout</button> </> :
      <><li><NavLink to='/login'>Login</NavLink ></li>
      </>
    } 
  </>
  return (
    <>
      <div className="navbar index-5 max-w-screen-xl mx-auto z-20 bg:opacity-40 text-white bg-black ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu text-black menu-compact dropdown-content mt-3 p-2 z-10 shadow bg-base-100 text-lg rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Sports Academies</a>
        </div>
        <div className="navbar-center hidden lg:flex">

          <ul className="menu text-lg menu-horizontal text-white px-1">
            {navOptions}
          </ul>
        </div>
        <div title={user ? user?.displayName : "No User"} className="navbar-end  mr-4">
          {user ?
            <> <div> <img className='w-10  h-10 rounded-full' src={user?.photoURL} alt="" /> </div> </> :
            <> <FaUserCircle className='w-10 h-10'></FaUserCircle> </>
          }
        </div>
      </div>
    </>
  );
};

export default Navbar;
import React from 'react';
import { Outlet } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';
import { FaBook, FaBookOpen, FaBookmark, FaCarAlt, FaDollarSign, FaHome, FaUser, FaUserAlt, FaUserCircle, } from 'react-icons/fa';

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  mx-5 flex flex-col justify-center">
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden ">Open drawer</label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-yellow-600 text-base-content">


          <div className='divider'></div>
          {
            isAdmin ? <>
              <li>  <NavLink to="/dashboard/adminHome"> <FaHome className='w-6 h-6'></FaHome>  Admin Home </NavLink> </li>
              <li>  <NavLink to="/dashboard/manageClasses"> <FaBookOpen className='w-6 h-6'></FaBookOpen> Manage Classes </NavLink> </li>
              <li> <NavLink to="/dashboard/manageUsers"> <FaUserCircle className='w-6 h-6'></FaUserCircle > Manage Users </NavLink> </li>

            </> : isInstructor ? <>
              {/*  */}
              <li> <NavLink to="/dashboard/addClass"> <FaBookmark className='w-6 h-6'></FaBookmark> Add A Class </NavLink> </li>
              <li> <NavLink to="/dashboard/myClass"> <FaBookOpen className='w-6 h-6'></FaBookOpen> My Class </NavLink> </li>
            </> : <>
              <li> <NavLink to="/dashboard/mySelectClass"> <FaCarAlt className='w-6 h-6'></FaCarAlt> My Selected classes </NavLink> </li>
              <li> <NavLink to="/dashboard/myEnrolledClass"> <FaBookOpen className='w-6 h-6'></FaBookOpen> My Enrolled classes </NavLink> </li>
              <li> <NavLink to="/dashboard/paymentHistory"> <FaDollarSign className='w-6 h-6'></FaDollarSign> Payment History </NavLink> </li>
            </>
          }
          <div className='divider'></div>
          <li><NavLink to="/"> <FaHome className='w-6 h-6'></FaHome> Home </NavLink> </li>
          <li className=''> <NavLink to="/allClasses"> <FaBookOpen className='w-6 h-6 hover:text-blue-600'></FaBookOpen > All Classes</NavLink> </li>
          <li> <NavLink to="/instructors"> <FaUserAlt className='w-6 h-5'></FaUserAlt> All Instructors </NavLink> </li>
        </ul>
      </div>
    </div>

  );
};

export default Dashboard;
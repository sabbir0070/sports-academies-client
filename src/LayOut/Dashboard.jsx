import React from 'react';
import { Outlet } from "react-router-dom";
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  const isAdmin = true;
  const isInstructor = true;

  // TODO:load data from the server to have dynamic based
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  mx-5 flex flex-col justify-center">
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden ">Open drawer</label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-base-content">
         

          {
            isAdmin ? <> 
<li> <NavLink to="/dashboard/adminHome"> AdminHome </NavLink> </li>
<li> <NavLink to="/dashboard/manageClasses"> Manage Classes </NavLink> </li>
              <li> <NavLink to="/dashboard/manageUsers"> Manage Users </NavLink> </li>
            </> : isInstructor ? <>
              <div className='divider'></div>
              {/*Instructors dashboard  */}
              <li> <NavLink to="/dashboard/addClass"> Add A Class </NavLink> </li>
              <li> <NavLink to="/dashboard/myClass"> My Class </NavLink> </li>
            </> : <>
              <li> <NavLink to="/">User Home </NavLink> </li>
              <li> <NavLink to="/dashboard/mySelectClass"> My Selected classes </NavLink> </li>
              <li> <NavLink to="/dashboard/myEnrolledClass"> My Enrolled classes </NavLink> </li>
            </>
          }

          <div className='divider'></div>
        </ul>
      </div>
    </div>

  );
};

export default Dashboard;